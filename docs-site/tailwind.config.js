/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./pages/**/*.{js,jsx,ts,tsx,md,mdx}", "./components/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {
fontFamily: { sans: ['var(--font-inter)'] }
}
},
plugins: [require('@tailwindcss/typography')]
}
