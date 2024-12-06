import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', // Asegura que '@' apunte a la carpeta 'src/'
    },
  },
  test: {
    globals: true, // Habilitar los métodos globales como describe, it, expect
    environment: 'jsdom', // Entorno de pruebas basado en un DOM simulado
  },
})
