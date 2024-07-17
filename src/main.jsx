import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { AuthenticatedProvider } from './context/AuthenticatedContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticatedProvider>
      <RouterProvider router={router} />
    </AuthenticatedProvider>
  </React.StrictMode>
)
