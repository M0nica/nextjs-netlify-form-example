module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};
