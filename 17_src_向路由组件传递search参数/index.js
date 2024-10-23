// 引入react核心库
import React from 'react';
// 引入react-dom库
import ReactDOM from 'react-dom/client';
// 引入App组件
import App from './App';
// 引入react-router-dom库
import { BrowserRouter } from 'react-router-dom';


// 渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode> {/* StrictMode检查React代码不合理的地方 */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
