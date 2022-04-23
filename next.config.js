const path = require("path");

module.exports = {
  async redirects() {
    return [{ source: "/", destination: "/search", permanent: false }];
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/search",
      },
    ];
  },
  reactStrictMode: true,
  sassOptions: {
    includePath: [path.join(__dirname, "styles")],
  },
};
