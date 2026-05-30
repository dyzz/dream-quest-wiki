import DefaultTheme from "vitepress/theme";
import { inject } from "@vercel/analytics";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp() {
    if (
      typeof window !== "undefined" &&
      window.location.hostname.endsWith(".vercel.app")
    ) {
      inject();
    }
  }
};
