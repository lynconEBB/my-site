// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  fonts: [{
      provider: fontProviders.local(),
      name: "Oxanium",
      cssVariable: "--font-oxanium",
      options: {
          variants:[{
              src: ["./src/assets/fonts/oxanium.ttf"],
              weight: "200 800",
              style: "normal",
          }]
      }
  },
  {
      provider: fontProviders.local(),
      name: "Anton",
      cssVariable: "--font-anton",
      options: {
          variants:[{
              src: ["./src/assets/fonts/anton.ttf"],
              weight: "normal",
              style: "normal",
          }]
      }
  }],

  adapter: cloudflare()
});