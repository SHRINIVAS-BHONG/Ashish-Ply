import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // all packages in node_modules will go into the 'vendor' chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 // increase limit since vendor might be large, but it's fine because it's cached
  }
})
