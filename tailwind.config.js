module.exports = {
  darkMode:"class",
  content: ["./public/**/*.html"],
  theme: {
    container: {
      center: true,
      padding:"2rem",
    },
    extends:{
      fontFamily: {
        "sans":["iranyekan"]
      }
    }
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
