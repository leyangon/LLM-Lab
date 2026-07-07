/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Avenir Next",
          "Nunito Sans",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif"
        ],
        body: [
          "Gill Sans",
          "Avenir",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif"
        ],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        glow: "0 0 34px rgba(34, 211, 238, 0.18)",
        emerald: "0 18px 60px rgba(16, 185, 129, 0.16)"
      }
    }
  },
  plugins: []
};
