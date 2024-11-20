import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/v1': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true, // Important
        // rewrite: (path) => path.replace(/^\/v1/, '') // Remove the /v1 prefix
      // },
    },
  }
})
