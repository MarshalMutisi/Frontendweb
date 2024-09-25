import React from 'react';
import { createRoot } from 'react-dom/client'; // Change this import
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Find the root DOM element
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = createRoot(rootElement);

// Render the application
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
