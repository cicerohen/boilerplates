const isDevEnv = process.env.NODE_ENV !== "production";

module.exports = {
  styledComponents: {
    displayName: isDevEnv,
  },
};
