import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Campus-Quest/',
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, 'index.html'),
        resolve(__dirname, 'Campus Quest.html'),
        resolve(__dirname, 'Campus Quest Web.html'),
      ],
    },
  },
});
