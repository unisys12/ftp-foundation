/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,md,njk,js}", // project root
    "./src/_includes/*.{html,md,njk,js}", // main includes dir
    "./src/_includes/components/*.{html,md,njk,js}", // components dir
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
    }),
  ],
};
