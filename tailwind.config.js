/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Poppins : ['Poppins', 'sans-serif'],
        Roboto : ['Roboto', 'sans-serif']
      },
      backgroundImage :{
        'jobs-background' : "URL(https://img.freepik.com/free-photo/office-skyscrapers-business-district_107420-95733.jpg?w=1800&t=st=1683519315~exp=1683519915~hmac=af77622387c143a049bed0251a1d76a5c81db2b605f1bd0e9e3f4d406d7c460e)",
      },
      colors:{
        'background': '#F6F7FB',
        'primary' : '#1E86FF',
        'secondary': '#334680'
      }
    },
  },
  plugins: [],
}

