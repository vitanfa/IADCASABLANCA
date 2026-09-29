import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import { initGtag } from './lib/analytics';
import './index.css';

// Init Google Ads uniquement côté client (pas lors du pré-rendu SSR)
if (!import.meta.env.SSR) {
  initGtag();
}

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Hydrate si le HTML est pré-rendu (prod), sinon render normal (dev)
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
