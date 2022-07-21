import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Movies from './containers/Movies';
import { Box } from '@mui/material';
import {Routes,Route,Link} from 'react-router-dom'
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';
import Register from './containers/Register';
import Login from './containers/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/" element={<Movies />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<Box sx={{ mt: 10 }}>Halaman About</Box>}></Route>
        <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="subscribed/:plan" element={<Subscribed />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
