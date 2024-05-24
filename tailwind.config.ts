import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '480px',
        m: '720px',
        custom: { min: '720px', max: '1139px' },
        g: '920px',
        '3xl': '2000px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        spgradient: 'radial-gradient(circle at center, #003554, #022b42, #032030)',
      },
      colors: {
        spwhite: '#F2F7FB',
        spblack: '#0B151C',
        spblue: '#005482',
      },
    },
  },
  plugins: [require('postcss-100vh-fix')],
};

module.exports = withMT(config);
