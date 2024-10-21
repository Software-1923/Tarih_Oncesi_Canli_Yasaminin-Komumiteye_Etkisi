/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",        // Yeni alias ile uyumlu
    "./magicui/**/*.{ts,tsx}"    // Yeni alias ile uyumlu
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // Custom scrollbar styling
      scrollbarWidth: {
        thin: 'thin',
      },
      scrollbarColor: {
        primary: '#6B7280',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),  // Mevcut animasyon plugin'i
    require('tailwind-scrollbar'),   // Scroll bar plugin'i
  ],
  variants: {
    scrollbar: ['rounded'], // Scrollbar'ı yuvarlatmak için variant desteği
  }
};
