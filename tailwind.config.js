module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: {
        index:
          "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5)), url('../assets/images/index/hero.jpg')",
        "about-us":
          "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5)), url('../assets/images/about-us/hero.jpg')",
        "past-seasons":
          "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5)), url('../assets/images/past-seasons/hero.jpg')",
        "sponsor-us":
          "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5)), url('../assets/images/sponsor-us/hero.jpg')",
        sponsors:
          "linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.5)), url('../assets/images/sponsors/hero.jpg')",
      },
      width: {
        128: "32rem",
      },
      height: {
        128: "32rem",
      },
      backgroundColor: {
        "gray-775": "#252F3E",
      },
      fontSize: {
        none: "0rem; line-height: 1.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
