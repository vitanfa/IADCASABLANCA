import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import App from './App';

export async function prerender() {
  const html = renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );

  return { html };
}
