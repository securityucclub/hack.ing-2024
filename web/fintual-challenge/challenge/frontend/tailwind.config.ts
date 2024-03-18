import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        "border-b":
          "0 1px 3px 0 rgba(0,0,0,.04),0 1px 1px 0 rgba(0,0,0,.04),0 2px 1px -1px rgba(0,0,0,.04)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
