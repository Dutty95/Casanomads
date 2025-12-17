import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // This MUST match your GitHub repo name
  plugins: [react()],
  optimizeDeps: {
    include: ['pdfjs-dist'],
  },
})