/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [require("./tools/plugins/tailwind")],
    safelist: [
      "after:pb-[50%]",
      "after:pb-[75%]",
      "after:pb-[100%]",
      "max-w-[none]",
      "max-h-[none]",
      "max-w-full",
      "max-h-full",
    ],
    future: {
      hoverOnlyWhenSupported: true,
    },
    theme: {
      screens: {
        sm: "375px",
        md: "600px",
        lg: "1024px",
        banner: "480px",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "Roboto",
          "sans-serif",
        ],
      },        
      extend: {
        width: {
          limit: "600px",
        },
        maxWidth: {
          limit: "600px",
        },
      },
    },
  }