import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './Pages/Multilang/wrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Wrapper>
);
