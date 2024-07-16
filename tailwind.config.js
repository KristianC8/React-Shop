/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryLight: 'var(--principal-light)',
        secondaryLight: 'var(--secondary-light)',
        primaryDark: 'var(--principal-dark)',
        secondaryDark: 'var(--secondary-dark)',
        primary: 'var(--principal)',
        bgImgGray: 'var(--bg-imgGray)'
      },
      minHeight: {
        'screen-dvh': 'calc(100vh - 4rem)'
      },
      backgroundColor: {
        'custom-dark': '#09090b',
        'custom-light': '#d8d8d8'
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
