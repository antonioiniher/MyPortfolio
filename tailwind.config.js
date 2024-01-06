/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#191919',
      navFont: '#A7A7A7',
      text: '#D9D9D9',
      card: '#363636',
      cardFont: '#CCCCCC'
    },
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover']
    }
  },
  plugins: []
}
