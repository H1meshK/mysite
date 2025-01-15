import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Adding 'framer-motion' to external to resolve the build error
    },
  },
});
