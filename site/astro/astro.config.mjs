import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";

export default defineConfig({
  output: "static",
  base: process.env.BASE_PATH || "/",
  markdown: {
    remarkPlugins: [remarkGfm]
  },
  publicDir: "./.generated-public"
});

