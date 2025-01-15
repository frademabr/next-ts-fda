module.exports = {
  eslint: {
    dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

module.exports = {
  extends: [
    //...
    "plugin:@next/next/recommended",
  ],
};
