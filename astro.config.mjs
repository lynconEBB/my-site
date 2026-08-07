// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Oxanium",
        cssVariable: "--font-oxanium",
        options: {
            variants:[{
                src: ["./src/assets/fonts/oxanium.ttf"],
                weight: "200 8000",
                style: "normal",
            }]
        }
    }]
});
