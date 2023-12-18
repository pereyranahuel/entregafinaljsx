import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
export default defineConfig({
  plugins: [react()],
})
