/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom1: ["Custom-1", "sans-serif"],
      ibmplex: ['IBM Plex', 'sans-serif'],
      sans: ['IBM Plex', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'noise': "url('./assets/noisebg.svg')",
        'maze2': "url('./assets/maze2.svg')",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
    plugins: [],
  }
}
