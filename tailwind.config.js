module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        index:
          "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5)), url('../assets/images/lp/hero.jpg')",
        about:
          "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5)), url('../assets/images/about/hero.jpg')",
      },
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
