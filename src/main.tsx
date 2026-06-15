import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Pattern } from './Pattern.tsx';
import './index.css';

const rootElement = document.getElementById('react-calendar-root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Pattern />
    </StrictMode>
  );
}
