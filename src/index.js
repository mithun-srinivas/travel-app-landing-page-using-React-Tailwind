import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            {/* <NavigationBar /> */}
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
