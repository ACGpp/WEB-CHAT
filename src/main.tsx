import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 防止在严格模式下重复渲染
ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
); 