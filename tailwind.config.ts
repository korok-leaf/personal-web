import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shrink: "shrink 1s ease-out forwards",
      },

      animationDelay: {
        '500': '500ms',
        '1000': '1000ms',
      },

      keyframes: {
        spotlight: {
          "0%": {
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            transform: "translate(-50%,-40%) scale(1)",
          },
        },

        shrink: {
          "0%": { transform: "scale(1.5)" },
          "100%": { transform: "scale(1)" },
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        'forest': "url('/forest.svg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.animation-delay-500': {
            'animation-delay': '500ms',
          },
          '.animation-delay-1000': {
            'animation-delay': '1000ms',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
} satisfies Config;
