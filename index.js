/** @type {import('prettier').Config} */
export default {
  semi: true, // default: true
  singleQuote: false, // default: false
  htmlWhitespaceSensitivity: "ignore", // default: 'css'
  overrides: [
    {
      files: "pnpm-lock.yaml",
      options: {
        requirePragma: true, // default: false
      },
    },
  ],
};
