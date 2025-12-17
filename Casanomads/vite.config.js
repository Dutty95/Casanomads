import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Casanomads/', // replace with your GitHub repo name
  plugins: [react()],
});