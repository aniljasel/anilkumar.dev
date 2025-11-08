import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(async () => {
  const isProd = process.env.NODE_ENV === 'production';
  const plugins = [react()];

  if (isProd) {
    try {
      const compressionMod = await import('vite-plugin-compression');
      if (compressionMod.default) {
        plugins.push(compressionMod.default({ algorithm: 'brotliCompress' }));
      }
      
      if (!process.env.VERCEL) {
        const { visualizer } = await import('rollup-plugin-visualizer');
        plugins.push(visualizer({
          filename: 'dist/stats.html',
          open: false,
          gzipSize: true
        }));
      }
    } catch (err) {
      console.warn('Build optimization plugins failed to load:', err.message);
    }
  }

  return {
    plugins,
    optimizeDeps: {
      include: ['gsap']
    },
    build: {
      target: 'es2019',
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          }
        }
      }
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