/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-dvh': 'calc(100dvh - 4rem)'
      }
    }
  },
  plugins: []
}
