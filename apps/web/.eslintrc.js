module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: [
    "next/core-web-vitals",
    "turbo",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
  },
  settings: {
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "tailwind.config.ts",
    },
    next: {
      rootDir: ["./*"],
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
}

// module.exports = {
//   extends: ["@repo/eslint-config/next.js"],
// }
