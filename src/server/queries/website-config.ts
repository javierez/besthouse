

export type PropertiesConfig = {
  title: string;
  subtitle: string;
  buttonText: string;
  itemsPerPage?: number;
  defaultSort?: string;
};

export const getPropertiesConfig = (): PropertiesConfig => {
  return {
  "title": "Nuestras propiedades",
  "subtitle": "Encuentra tu opción ideal",
  "buttonText": "Ver Todas"
};
}

export type SEOConfig = {
  title: string;
  description: string;
  name?: string;
  image?: string;
  url?: string;
  telephone?: string;
  email?: string;
  keywords?: string[] | string; // Support both array and string formats
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export const getSEOConfig = (): SEOConfig => {
  return {
  "title": "Inmobiliaria Best House León - Alquiler y venta de pisos en León",
  "description": "Pisos y casas León. Alquiler y venta.",
  "keywords": "león, casas, inmobiliaria, pisos, alquiler, venta",
  "name": "",
  "email": "",
  "telephone": "",
  "url": "",
  "ogTitle": "",
  "ogDescription": "",
  "ogImage": "",
  "ogType": "website",
  "ogUrl": "",
  "ogLocale": "es_ES",
  "ogSiteName": ""
};
}
