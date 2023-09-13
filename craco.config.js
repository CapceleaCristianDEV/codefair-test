module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = webpackConfig.resolve.fallback || {};
      webpackConfig.resolve.fallback.timers =
        webpackConfig.resolve.fallback.timers ??
        require.resolve("timers-browserify");
      webpackConfig.resolve.fallback.stream =
        webpackConfig.resolve.fallback.stream ??
        require.resolve("stream-browserify");
      return webpackConfig;
    },
  },
};
