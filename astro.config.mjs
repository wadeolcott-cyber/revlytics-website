import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ site: 'https://rev-lytics.com', output: 'static', vite: { plugins: [tailwindcss()] } });
