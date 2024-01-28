import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#4CAF50',
        secondary: {
          50: '#FFE5E0',
          100: '#FFCBC2',
          200: '#FFB1A3',
          300: '#FF9784',
          400: '#FF7D66',
          500: '#ff6347',
          600: '#D5533B',
          700: '#AA422F',
          800: '#803224',
          900: '#552118',
          950: '#2B110C',
        },
        tertiary: {
          50: '#FFF8D5',
          100: '#FFF2AA',
          200: '#FFEB80',
          300: '#FFE455',
          400: '#FFDE2B',
          500: '#FFD700',
          600: '#D5B300',
          700: '#AA8F00',
          800: '#806C00',
          900: '#554800',
          950: '#2B2400',
        },
        background: '#F5F5F5',
        emphasis: '#FFA500',
      },
    },
  },
  plugins: [],
}
export default config
