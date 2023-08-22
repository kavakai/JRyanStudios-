'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  const definePlugin = new webpack.DefinePlugin({
    STRIPE_SECRET_KEY: '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'
  });

  config.plugins.push(definePlugin);
  return config;
};
