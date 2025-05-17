import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import ScholarshipsPage from './pages/Scholarships.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/scholarships' element={<ScholarshipsPage />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
