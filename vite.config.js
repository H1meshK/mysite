import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Externalize if necessary, but ensure it is installed
    },
  },
  optimizeDeps: {
    include: ['framer-motion'], // Ensure framer-motion is pre-bundled by Vite for production
  },
});
