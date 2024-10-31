import type { Config } from 'tailwindcss';

const config: Config = {
  prefix: 'tw-',
  corePlugins: {
    preflight: true,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      '1.4rem': '1.4rem',
    },
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      primary: 'var(--font-oswald)',
      pixelated: 'var(--font-pixelify-sans)',
    },
    extend: {
      colors: {
        background: 'var(--bg-color)',
        secondary: 'var(--secondary-bg-color)',
        'text-color': 'var(--text-color)',
        'main-color': 'var(--main-color)',
      },
      backgroundImage: {
        dwarf: "url('/dwarf.jpg')",
      },
      boxShadow: {
        'glow-tiny': '0 0 10px var(--main-color)',
        'glow-sm': '0 0 25px var(--main-color)',
        'glow-md': '0 0 50px var(--main-color)',
        'glow-lg': '0 0 25px var(--main-color), 0 0 50px var(--main-color)',
        'glow-xl':
          '0 0 25px var(--main-color), 0 0 50px var(--main-color), 0 0 100px var(--main-color)',
        transparent: '0 0 25px transparent',
      },
      keyframes: {
        cursor: {
          to: { borderLeft: '2px solid var(--main-color)' },
        },
        words: {
          '0%, 20%': { content: '= "Backend Engineer";' },
          '21%, 40%': { content: '= "Fullstack Engineer";' },
          '41%, 60%': { content: '= "Mobile Engineer";' },
          '61%, 80%': { content: '= "Test Automation Engineer";' },
          '81%, 100%': { content: '= "Gaming Enthusiast";' },
        },
        typing: {
          '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': { width: '0' },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': {
            width: 'calc(100% + 8px)',
          },
        },
      },
      animation: {
        'cursor-typing': 'cursor .6s infinite, typing 10s steps(14) infinite ',
        words: 'words 10s infinite',
      },
      width: {
        'full-p8': 'calc(100% + 8px)',
      },
      spacing: {
        'half-n1px': 'calc(50% - 1px)',
        'half-n8px': 'calc(50% - 8px)',
      },
      padding: {
        'half-30px': 'calc(50% + 30px)',
        'half-n8px': 'calc(50% - 8px)',
      },
    },
  },
  plugins: [],
};
export default config;
