/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111318',
        mist: '#f5f4f0',
        stone: {
          25: '#fbfbf9',
        },
        accent: {
          50: '#f8f2eb',
          100: '#eadbca',
          200: '#d8bea0',
          300: '#c39d74',
          400: '#a9794c',
          500: '#8d5b3b',
          600: '#714830',
        },
      },
      boxShadow: {
        soft: '0 24px 60px rgba(17, 19, 24, 0.08)',
        panel: '0 12px 30px rgba(17, 19, 24, 0.06)',
      },
      fontFamily: {
        sans: ['"Suisse Int’l"', '"Neue Haas Grotesk Text"', '"Inter"', 'sans-serif'],
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', '"Book Antiqua"', '"Times New Roman"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'soft-radial':
          'radial-gradient(circle at top, rgba(169, 121, 76, 0.12), transparent 42%)',
      },
    },
  },
  plugins: [],
}
