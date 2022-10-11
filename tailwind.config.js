/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#ef4444",
        "primary-hover": "#ea3939",
        "primary-contrast": "#fafafa",
        "primary-neutral": "#262626",
        "primary-neutral-hover": "#4c4c4c",
      },
    },
  },
}
