

export interface WatermarkConfig {
  enabled: boolean;
  position: string;
  sizePercentage: number;
  opacity: number;
  logoUrl: string;
}

export const getWatermarkConfig = (): WatermarkConfig => {
  return {
  "enabled": true,
  "position": "center",
  "sizePercentage": 45,
  "opacity": 0.45,
  "logoUrl": "https://best-house.s3.us-east-1.amazonaws.com/branding/logo_transparent_1772223472563_bK7maW.png"
};
}