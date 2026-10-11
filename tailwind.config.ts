import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.12)',
      },
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#dbeafe',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
        },
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(148,163,184,0.12) 0px, transparent 1px)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
