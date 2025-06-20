import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  ssr: {
    noExternal: ['react-router-dom', 'react-helmet-async'], // react-router-dom is included in the SSR bundle to ensure that it is handled correctly during server-side rendering. React Router DOM uses some browser-specific APIs like window or history that don't exist in Node.js environments. By bundling it, Vite ensures that these APIs are correctly polyfilled or handled during SSR.
  },
  optimizeDeps: {
    include: ['react-router-dom', 'react-helmet-async']
  },
})
