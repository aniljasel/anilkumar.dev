import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async () => {
  const isProd = process.env.NODE_ENV === 'production';
  const plugins = [react()];

  if (isProd) {
    const compressionMod = await import('vite-plugin-compression').catch(() => ({ default: null }));
    const visualizerMod = await import('rollup-plugin-visualizer').catch(() => ({ default: null }));
    const viteCompression = compressionMod.default;
    const visualizer = visualizerMod.default;

    if (viteCompression) plugins.push(viteCompression({ algorithm: 'brotliCompress' }));
    if (visualizer) plugins.push(visualizer({ filename: 'dist/stats.html', open: false }));
  }

  return {
    plugins,
    optimizeDeps: {
      include: ['gsap']
    },
    build: {
      target: 'es2019',
      chunkSizeWarningLimit: 1200
    },
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