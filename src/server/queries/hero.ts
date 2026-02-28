import type { HeroProps } from "../../lib/data";

// Using React cache to memoize the query
export const getHeroProps = (): HeroProps | null => {
  return {
  "title": "Venta y alquiler de pisos en León",
  "subtitle": "Ven a tu casa y encontraremos tu hogar",
  "backgroundImage": "",
  "backgroundVideo": "https://best-house.s3.us-east-1.amazonaws.com/hero/background_1772276048779_I2DJ9F.mp4",
  "backgroundType": "video",
  "findPropertyButton": "Encuentra tu casa",
  "contactButton": "Ponte en contacto"
};
}
