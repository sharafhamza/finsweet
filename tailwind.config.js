/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1C1E53',
        secondary: "#282938",
        third:"#2405F2",
        menu: "#BBBBCB",
        sectioncolor: "#EEF4FA",
        button: "#FCD980",
        footercolor:"#F4F6FC",
        bordercolor: "#27295C",
        offwhite: "rgba(255, 255, 255, 0.1)",
        icon: "#97DAAD",
      },
      fontFamily: {
        pop: ["Poppins"],
        man: ["Manrope"],
      },
      fontSize: {
        large: "54px",
        xl:"38px",
        medium: "32px",
        small: "12px",
      },
      maxWidth: {
        container: '1280px',
      }
    },
  },
  plugins: [],
}

