const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined;
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;
const LABEL_CALL = import.meta.env.VITE_GADS_LABEL_CALL as string | undefined;
const LABEL_WHATSAPP = import.meta.env.VITE_GADS_LABEL_WHATSAPP as string | undefined;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

export function initGtag(): void {
  if (initialized || typeof window === 'undefined') return;

  const primaryId = GA4_ID || GOOGLE_ADS_ID;
  if (!primaryId) return;

  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // gtag.js ne lit que l'objet `arguments` : un tableau (...args) est ignoré et rien n'est envoyé à Google.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());

  if (GA4_ID) window.gtag('config', GA4_ID);
  if (GOOGLE_ADS_ID) window.gtag('config', GOOGLE_ADS_ID);
}

export type ConversionType = 'call' | 'whatsapp';

export function trackConversion(type: ConversionType): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  if (GA4_ID) {
    const eventName = type === 'call' ? 'cta_call_click' : 'cta_whatsapp_click';
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: type,
    });
  }

  if (GOOGLE_ADS_ID) {
    const label = type === 'call' ? LABEL_CALL : LABEL_WHATSAPP;
    if (label) {
      window.gtag('event', 'conversion', {
        send_to: `${GOOGLE_ADS_ID}/${label}`,
      });
    }
  }
}
