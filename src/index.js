import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App';

///Компонент не может изменять пропсы которые в него передают , для того чтобы что то менять надо рендорить компонент заново


///in jsx you can't used object in elements if your want show this object in dom

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
