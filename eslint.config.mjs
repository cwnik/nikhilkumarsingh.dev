import vitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...vitals,
  ...typescript,

  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@next/next/no-img-element": "off",
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
