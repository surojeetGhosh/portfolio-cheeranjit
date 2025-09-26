import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // use your CSS variables defined in src/styles/index.css
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e3a8a',
          900: '#1e40af',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        engineering: {
          blue: '#1e3a8a',
          lightBlue: '#3b82f6',
          orange: '#f97316',
          gray: '#64748b',
          lightGray: '#f1f5f9',
          darkGray: '#334155',
        }
      },
      boxShadow: {
        // top shadow for footer
        "top-md": "0 -6px 12px -4px rgba(0,0,0,0.15)",
        "engineering": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "card": "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;