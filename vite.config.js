import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    theme: {
      extend: {
        screens: {
          'xs': '480px',  // Add a new extra-small breakpoint
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '1920px', // Add a new extra-large breakpoint
        },
      },
    },
  plugins: [react(), tailwindcss()],
})
