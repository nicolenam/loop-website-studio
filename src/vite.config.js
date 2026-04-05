import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import base44 from '@base44/vite-plugin';

export default defineConfig({
  base: '/loop-website-studio/',
  plugins: [
    base44(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});