import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConvexProvider, ConvexReactClient } from "convex/react";

import './index.css'

//const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <App />
    
  </React.StrictMode>,
)
