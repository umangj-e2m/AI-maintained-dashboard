import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ClientsPage from './Clients.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ClientsPage />
    </StrictMode>
  );
}
