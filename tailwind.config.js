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
        'screen-dvh': 'calc(100vh - 4rem)',
        'screen-dvh-mobile': 'calc(100dvh - 4rem)'
      },
      backgroundColor: {
        'custom-dark': '#09090b',
        'custom-light': '#d8d8d8'
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
        // 'fade-in-down': 'fade-in-down 0.6s ease-in-out both'
        fadeindown: 'fade-in-down 1s ease-in 0.25s 1',
        fadeinleft: 'fade-in-left 1s ease-in-out 0.1s 1',
        outline: 'outline 0.6s ease-in',
        circle: 'circle 0.35s ease-in 0.35s forwards',
        check: 'check 0.34s cubic-bezier(0.65, 0, 1, 1) 0.8s forwards',
        'check-group': 'check-group 0.32s ease-in-out 1.03s'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        'fade-in-down': {
          from: {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)'
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        'fade-in-left': {
          from: {
            opacity: 0,
            transform: 'translate3d(-100%, 0, 0)'
          },
          to: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          }
        },
        outline: {
          '0%': { strokeDasharray: '0, 345.576px' },
          '100%': { strokeDasharray: '345.576px, 345.576px' }
        },
        circle: {
          '0%': { transform: 'scale(1)', transformOrigin: 'center' },
          '100%': { transform: 'scale(0)', transformOrigin: 'center' }
        },
        check: {
          '0%': { strokeDasharray: '0, 75px' },
          '100%': { strokeDasharray: '75px, 75px' }
        },
        'check-group': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.09)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: []
}
