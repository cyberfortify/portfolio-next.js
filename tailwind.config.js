/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(192, 132, 252, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'serif'],
      },
      colors: {
        neon: "#ccff00",
        dark: "#0e0e0e",
        overlay: "rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
}
