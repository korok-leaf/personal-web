import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        dark: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Dark shadow
        white: '2px 2px 4px rgba(255, 255, 255, 0.9)', // White shadow
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shrink: "shrink 1s ease-out forwards",
        slideBottom: "slideBottom 1s ease-in forwards",
        slideTop: "slideTop 1s ease-in forwards",
        profileA: "profileA 1s ease-in forwards", 
        fadeCenter: "fadeCenter 3s ease-out forwards",
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

        slideBottom: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          }
        },
        slideTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          }
        },
        profileA: {
          "0%": {
            transform: "translateX(30%) translatey(30%) scale(1.5)",
          },
          "100%": {
            transform: "translateX(0) translateX(0) scale(1)",
          }
        },
        fadeCenter: {
          "0%": {
            width: "0",
            opacity: "0",
          }, 
          "100%": {
            width: "80%",
            opacity: "1",
          },
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
    function ({ addUtilities }: { addUtilities: Function } ) {
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
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.text-shadow-dark': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.7)',
        },
        '.text-shadow-white': {
          'text-shadow': '2px 2px 4px rgba(255, 255, 255, 0.9)',
        },
      });
    },
  ],
} satisfies Config;
