/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'six': '600px', // Điểm dừng tùy chỉnh cho 600px
        'five': '500px',
        'four': '400px',
        'min-w1-re': { 'min': '740px' }, // Điểm dừng tùy chỉnh cho 400px
        'min-w2-re': { 'min': '1024px' }, // Điểm dừng tùy chỉnh cho 500px
        'max-w1-re': { 'max': '739px' }, // giới hạn lớn nhất
        'max-w2-re': { 'max': '1023px' },
        // 'min-w3-re': { 'max': '1024px' },
      }
    },
  },
  plugins: [],
}