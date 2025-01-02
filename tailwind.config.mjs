/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
export default {
  content: [
    "./src/*.{html,md,njk}", // project root
    "./src/minutes/*.{html,md,njk}", // meeting minutes dir
    "./src/_includes/*.{html,md,njk}", // main includes dir
    "./src/_includes/components/*.{html,md,njk}", // components dir
  ],
  theme: {
    extend: {
      screens: {
        print: {raw: "print"},
        screen: {raw: "screen"},
      },
      fontFamily: {
        sans: ["AtkinsonRegular", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    forms({
      strategy: "base", // only generate global styles
    }),
    typography,
  ],
};
