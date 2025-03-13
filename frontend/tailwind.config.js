/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#1f2937',
        accent: '#3498db',
      },
      backgroundImage: {
        'hero-pattern': "url('public/image_1.jpg')",
        'contact-form': "url('public/contact.jpg')",
        'contact-us': "url('public/contact_us.jpg')",
      },
    },
  },
  plugins: [],
}
