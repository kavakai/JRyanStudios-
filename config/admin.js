module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  webpack: (config, webpack) => {
    // Add your variable using the DefinePlugin function
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
  },
});
