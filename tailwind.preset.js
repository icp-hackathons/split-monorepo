const colors = {
  blue: {
    50: "#cee6fa", // Blue-01
    100: "#b5daf8", // Blue-02
    200: "#9dcdf6", // Blue-03
    300: "#6cb5f1", // Blue-04
    400: "#3b9ced", // Blue-05
    500: "#0a83e8", // Blue-06
    600: "#0869ba", // Blue-07
    700: "#064f8b", // Blue-08
    800: "#04345d", // Blue-09
    900: "#032746", // Blue-10
  },
  violet: {
    50: "#f3d7e6",
    100: "#e7c5d7",
    200: "#dcb3c9",
    300: "#d0a2ba",
    400: "#c490ab",
    500: "#ad6c8e",
    600: "#954970",
    700: "#7e2553",
    800: "#651e42",
    900: "#4c1632",
  },
  gray: {
    white: "#ffffff", // Gray-01
    25: "#f2f2f2", // Gray-02
    50: "#e5e5e5", // Gray-03
    100: "#d8d8d8", // Gray-04
    200: "#cbcbcb", // Gray-05
    300: "#b2b2b2", // Gray-06
    400: "#989898", // Gray-07
    500: "#7e7e7e", // Gray-08
    600: "#656565", // Gray-09
    700: "#4c4c4c", // Gray-10
    800: "#323232", // Gray-11
    900: "#191919", // Gray-12
    950: "#0d0d0d", // Gray-13
    black: "#000000", // Gray-14
  },
  message: {
    error: "#f04438",
    success: "#12b76a",
  },
  etc: {
    transparentBlack: "#000000cc",
  },
};

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
      sm: "600px",
      md: "1024px",
      lg: "1440px",
    },
    fontFamily: {
      sans: ["Open Sans"],
    },
    fontSize: {
      "10/regular": ["10px", { fontWeight: 400, lineHeight: "130%" }],
      "13/semi-bold": ["13px", { fontWeight: 600, lineHeight: "130%" }],
      "13/regular": ["13px", { fontWeight: 400, lineHeight: "130%" }],
      "16/semi-bold": ["16px", { fontWeight: 600, lineHeight: "130%" }],
      "16/regular": ["16px", { fontWeight: 400, lineHeight: "130%" }],
      "20/semi-bold": ["20px", { fontWeight: 600, lineHeight: "130%" }],
      "30/semi-bold": ["30px", { fontWeight: 600, lineHeight: "130%" }],
      "30/bold": ["30px", { fontWeight: 700, lineHeight: "130%" }],
      "60/bold": ["60px", { fontWeight: 700, lineHeight: "130%" }],
    },
    extend: {
      colors: {
        ...colors,
        theme: {
          lightGray: colors.gray[200],
          gray: colors.gray[500],
          white: colors.gray.white,
          whiteHover: colors.gray[25],
          blue: colors.blue[800],
          black: colors.gray.black,
          blackTransparent: colors.etc.transparentBlack,
          success: colors.message.success,
          error: colors.message.error,
        },
      },
    },
  },
};
