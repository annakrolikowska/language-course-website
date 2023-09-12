/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
        colors: {
            primary: {
                25: '#D5C5B8',
                50: '#B7A79B',
                100: '#998A7E',
            },
            secondary: {
              100: '#7A4257',
            },
            gray: {
                0: '#FFFCF7',
                100: '#0A0808'
            },
            danger: "#E7002A",
            success: "#00AB63",
        },
        screens: {
            xl: '1440px'
        },
        container: {
            screens: {
                xl: '1280px'
            }
        },
    },
},
  plugins: [],
}

