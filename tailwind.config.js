/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl-min': '1240px',
      },
      fontFamily: {
        'inter': ["Inter", 'sans-serif'],
        'lora': ["Lora", 'serif']
      },
      colors: {
        'primary-one': '#A37C45',
        'primary-one-light': '#E4CE9C',
        'blue-light': "#091928",
        'hero-highlighed': '#E4CE9C',
        'gray-light': '#333333',
        'black-light': '#232323',
        'gray-dim': '#666666',
        'black-blue': '#1D1F27',
        'navy-blue-dark': "#0A1928",
      }
    },
  },
  plugins: [],
};
