import type { Config } from 'tailwindcss';

const withMT = require('@material-tailwind/react/utils/withMT');

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

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
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        '.modal': {
          transform: 'translate3d(0,0,0)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          height: '100svh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: '100%',
          top: '0 !important',
          left: '0 !important',
          zIndex: '1000 !important',
        },
        '.quote-modal': {
          paddingTop: '550px',
          '@media (min-width: 640px)': {
            paddingTop: '300px',
          },
          '@media (min-height: 1020px)': {
            paddingTop: '0px',
          },
        },
        '.menu-modal': {
          paddingTop: '100%',
          '@media (min-height: 901px)': {
            paddingTop: '0px',
            paddingLeft: '20px',
            paddingRight: '20px',
            '> div': {
              borderRadius: '1rem',
            },
          },
          '@media (min-width: 500px)': {
            paddingTop: '0px',
            '> div': {
              borderRadius: '1rem',
            },
          },
        },
      };
      addUtilities(newUtilities);
    },
    require('postcss-100vh-fix'),
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}

module.exports = withMT(config);
