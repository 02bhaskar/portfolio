/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        editor: {
          bg: '#0d1117',
          deep: '#090d13',
          darker: '#05070a',
          card: '#161b22',
          cardhover: '#1c2128',
          hover: '#21262d',
          active: '#30363d',
          border: '#30363d',
          bordersubtle: '#21262d',
          sidebar: '#090d13',
          activitybar: '#040609',
          statusbar: '#040609',
          terminal: '#0a0e14',
          gutter: '#484f58',
        },
        gold: {
          50: '#fffbf0',
          100: '#fef3d6',
          200: '#fde4a3',
          300: '#fcd066',
          400: '#f5b938',
          500: '#e5a93c', // Signature Aureum Gold
          600: '#c68b1a',
          700: '#9b6711',
          800: '#6d450d',
          900: '#3e2406',
          muted: '#281e0c',
          glow: 'rgba(229, 169, 60, 0.25)',
        },
        gh: {
          green: '#2ea043',
          greenLight: '#3fb950',
          blue: '#58a6ff',
          purple: '#bc8cff',
          red: '#f85149',
          yellow: '#d29922',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px -3px rgba(229, 169, 60, 0.35)',
        'gold-sm': '0 0 10px -2px rgba(229, 169, 60, 0.25)',
        'ide': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cursor-blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}

