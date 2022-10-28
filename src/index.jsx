import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {AppProvider} from "./context";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
	  <React.StrictMode>
      <AppProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AppProvider>
	  </React.StrictMode>
  </BrowserRouter>
)