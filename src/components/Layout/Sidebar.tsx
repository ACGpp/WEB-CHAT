// src/components/Layout/Sidebar.tsx

import React from 'react';
import { MODEL_CONFIGS, ModelType, ModelCategory } from '../../types/chat';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // 引入收缩图标

interface SidebarProps {
  selectedModel: ModelType;
  setSelectedModel: (model: ModelType) => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedModel, setSelectedModel, isCollapsed, toggleCollapse }) => {
  const models: ModelType[] = Object.keys(MODEL_CONFIGS) as ModelType[];

  // 分类模型
  const categorizedModels: Record<ModelCategory, ModelType[]> = {
    '中国模型': [],
    '国外模型': [],
  };

  models.forEach(model => {
    const category = MODEL_CONFIGS[model].category;
    categorizedModels[category]?.push(model);
  });

  return (
    <div 
      className="sidebar" 
      style={{ 
        width: isCollapsed ? '80px' : '250px',
        padding: '20px', 
        borderRight: '1px solid #ccc', 
        backgroundColor: '#f8f9fa', 
        overflowY: 'auto',
        transition: 'width 0.3s',
        position: 'relative'
      }}
    >
      <button 
        onClick={toggleCollapse}
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: isCollapsed ? '10px' : '-20px',
          background: '#007bff',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
        }}
      >
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      <h2 style={{ display: isCollapsed ? 'none' : 'block', textAlign: 'center', marginBottom: '20px' }}>
        选择模型
      </h2>

      {Object.entries(categorizedModels).map(([category, models]) => (
        <div key={category} style={{ marginBottom: '20px' }}>
          {!isCollapsed && <h3 style={{ marginBottom: '10px' }}>{category}</h3>}
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {models.map(model => (
              <li 
                key={model} 
                className={selectedModel === model ? 'active' : ''}
                onClick={() => setSelectedModel(model)}
                style={{ 
                  cursor: 'pointer', 
                  padding: '10px', 
                  marginBottom: '8px', 
                  backgroundColor: selectedModel === model ? '#007bff' : 'transparent',
                  color: selectedModel === model ? '#fff' : '#000',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background-color 0.3s',
                  justifyContent: isCollapsed ? 'center' : 'flex-start'
                }}
              >
                <span style={{ marginRight: isCollapsed ? '0' : '10px', fontSize: '1.2rem' }}>
                  {MODEL_CONFIGS[model].icon}
                </span>
                {!isCollapsed && MODEL_CONFIGS[model].name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;