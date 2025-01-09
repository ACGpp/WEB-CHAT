// src/pages/Chat.tsx

import React from 'react';
import { MODEL_CONFIGS, ModelType } from '../types/chat';

interface ChatProps {
  selectedModel: ModelType;
}

const Chat: React.FC<ChatProps> = ({ selectedModel }) => {
  const model = MODEL_CONFIGS[selectedModel];

  return (
    <div className="chat-container" style={{ flex: 1, padding: '20px' }}>
      <h2>{model.name}</h2>
      <iframe
        src={model.url}
        title={model.name}
        style={{ width: '100%', height: '80vh', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Chat;