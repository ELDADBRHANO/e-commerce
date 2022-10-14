import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider}from './GlobalComponents/ThemeProvider';
import { render } from 'react-dom';
import {CartProvider} from 'react-use-cart';
import UserAuthContextProvider from './components/context/user-context';

render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <UserAuthContextProvider>
           <App />
        </UserAuthContextProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
