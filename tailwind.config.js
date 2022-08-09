module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#232323',
        secondary: '#C62F42',
      },
      backgroundImage: {
        roadmap: "url('/images/roadmapimg.png')",
        hero: "url('/images/heroImage.png')",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        // Futura: ['Futura Maxi CG Bold', 'sans-serif'],
        Futura: ['Futura', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        slidIn: {
          '0%': { height: '0vh', opacity: '0' },
          '50%': { height: '50vh', opacity: '0' },
          '100%': { height: '80vh', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slidIn 0.5s ease-in-out',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
