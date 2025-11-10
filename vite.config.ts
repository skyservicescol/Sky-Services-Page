import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 dominio personalizado usa raíz
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
