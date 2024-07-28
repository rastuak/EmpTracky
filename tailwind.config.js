/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing": "url('src/assets/images/bgLanding.svg')",
        "register": "url('src/assets/images/bgRegister.svg')",
        "login": "url('src/assets/images/bgLogin.svg')",
        "home": "url('src/assets/images/bgHome.svg')",
        "profile": "url('src/assets/images/bgProfile.svg')",
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      },
      "colors": {
        "emptracky": {
          "fd": "#fdfdfd",
          "f1" : "#f1f1f1",
          "f5" : "#f5f5f5",
          "f7" : "#f7f7f7",
          "blue": "#3E7CA2",
          "darkblue": "#024064",
          "darkgray" : "#36454F",
          "red": "#FF6F61",
        }
      }
    },
  },
  plugins: [],
};

