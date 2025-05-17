import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import ScholarshipsPage from './pages/Scholarships.tsx';
import Home from './pages/Home.tsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scholarships' element={<ScholarshipsPage />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
