
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Orbitron:["Orbitron","cursive","sans-serif"],
        epilogue: ['Epilogue', 'sans-serif'],
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}