module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    cors: {
      enabled: true,
      origin: [
        env('NEXT_PUBLIC_FRONTEND_URL', 'http://localhost:3000'),
        'https://nyson-cms-test.vercel.app',
        https://v0-nyson-rest-api-connection-v1.vercel.app/,
      ],
    },
  },
});
