import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { CustomCursor } from '@/components/cursor/CustomCursor';
import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CustomCursor />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
