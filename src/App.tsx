import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chat from './pages/Chat';
import Sidebar from './components/Layout/Sidebar';
import { ModelType } from './types/chat';

const App: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelType>('deepseek');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prevState => !prevState);
  };

  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', height: '100vh' }}>
        <Sidebar 
          selectedModel={selectedModel} 
          setSelectedModel={setSelectedModel} 
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={toggleSidebar}
        />
        <Routes>
          <Route path="/chat" element={<Chat selectedModel={selectedModel} />} />
          <Route path="/" element={<Navigate to="/chat" replace />} />
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;