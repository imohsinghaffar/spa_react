import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsss:"0px", //0 to 160px
        xss: "160px", //160 to 320
        xs: "320px", //320 to 640
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "smm": "200px",
        'height_login': {'raw': '(max-height: 260px)'},
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
