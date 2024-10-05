/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: 'var(--text-color)',
        background: 'var(--primary-bg)',
        accent: 'var(--accent)',
        gray: 'var(--gray)',
        darkgray: 'var(--dark-gray)'
      },
      backgroundImage: {
        'backround-desktop': "url('/background1.png')",
        gr: "url('/mobile-background1.png')"
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem'
      },
      fontFamily: {
        heading: 'Libre Baskerville',
        body: 'Kollektif'
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
