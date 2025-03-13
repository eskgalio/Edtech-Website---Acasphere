import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:5000', // Backend server
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '/api'), // Keep the path unchanged
        },
    },
},
plugins: [react()],
})

