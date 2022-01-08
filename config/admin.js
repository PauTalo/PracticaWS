module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '589785d27da6ca0dd56c8024a391ae6d'),
  },
});
