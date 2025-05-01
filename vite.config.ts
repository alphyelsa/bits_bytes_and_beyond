import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bits_bytes_and_beyond/", 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
