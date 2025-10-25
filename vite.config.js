import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig(async () => {
  const plugins = [react()];
  if (isProd) {
    const mod = await import('vite-plugin-compression').catch(() => ({ default: null }));
    const viteCompression = mod.default;
    if (viteCompression) plugins.push(viteCompression({ algorithm: 'brotliCompress' }));
  }
  return {
    plugins,
    optimizeDeps: { include: ['gsap'] },
    build: { target: 'es2019', chunkSizeWarningLimit: 1200 },
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_PROXY_TARGET || 'http://localhost:3001',
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
});