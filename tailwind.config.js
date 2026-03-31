/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        'primary-light': '#1e293b',
        accent: '#c5a059',
        'accent-light': '#e2c284',
        'text-main': '#1e293b',
        'text-muted': '#64748b',
        'glass-bg': 'rgba(255, 255, 255, 0.7)',
        'glass-border': 'rgba(255, 255, 255, 0.5)',
      },
      fontFamily: {
        main: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'sm': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'md': '0 12px 30px rgba(15, 23, 42, 0.08)',
        'lg': '0 20px 50px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
