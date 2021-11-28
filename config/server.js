module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "308f58596325c784b2c4de911b440dba"),
    },
  },
});
