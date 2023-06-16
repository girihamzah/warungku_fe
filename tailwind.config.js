/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      utama : '#ff9f1c',
      kedua : '#455A64',
      ketiga :'#C0C0C0',
      keempat : '#F4F4F4',
      kelima : '#EDEDED',
      keenam : '#FAFAFA',
      ketujuh : '#7B7B7B',
      putih : '#fff',
      biru : '#065a82',
      merah : '#EE6055',
      black : '#000'

    },
    container: {
      center: true,
    },
    extend: {
      dropShadow: {
        '4xl' : '-4px 4px 24px rgba(0, 0, 0, 0.03)',
        '5xl' : '0px 4px 12px rgba(0, 0, 0, 0.03)',
        '6xl' : '0px 0px 12px rgba(0, 0, 0, 0.05)',
        '7xl' : '0px 4px 12px rgba(0, 0, 0, 0.05)',
        '8xl' : '0px 2px 12px rgba(0, 0, 0, 0.05)',
      },
      fontFamily:{
        DMSans: ['DM Sans', 'sans-serif'],
        Cinzel: ['Cinzel Decorative', 'cursive'],
      },
      screens: {
        'sm':'420px',
      },
    },
  },
}