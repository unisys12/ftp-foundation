/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,md,njk}", // project root
    "./src/minutes/*.{html,md,njk}", // meeting minutes dir
    "./src/_includes/*.{html,md,njk}", // main includes dir
    "./src/_includes/components/*.{html,md,njk}", // components dir
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
    require("@tailwindcss/typography"),
  ],
};
