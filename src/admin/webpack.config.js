'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.plugins.push(
    new webpack.DefinePlugin({
      // ENVS that you want to use in frontend
      CUSTOM_VARIABLES: {
        STRIPE_SECRET_KEY: JSON.stringify(process.env.STRIPE_SECRET_KEY),
      },
    })
  );
  // Return the modified config
  return config;
};
