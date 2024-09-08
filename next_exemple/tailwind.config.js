const {nextui} = require("@nextui-org/react")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "!./node_modules",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(-40%)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(40%)' },
        },
      },
      animation: {
        'slide-left': 'slideLeft 90s ease-in-out infinite',
        'slide-right': 'slideRight 90s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")]
}
