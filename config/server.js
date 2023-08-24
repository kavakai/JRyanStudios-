module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [STRAPI_ADMIN_STRIPE_SECRET_KEY, STRAPI_ADMIN_STRIPE_PUBLISHABLE_KEY]),
  },
});
