require("dotenv").config();

module.exports = {
  development: {
    host: process.env.DEV_HOST,
    username: process.env.DEV_USERNAME,
    password: process.env.DEV_USERNAME,
    database: process.env.DEV_DATABASE,
    database_url: process.env.DEV_DATABASE_URL,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    bcryptSalt: process.env.BCRYPT_SALT,
    maxMediaFileSize: process.env.MAX_MEDIA_FILE_SIZE,
    url: {
      client: process.env.CLIENT_BASE_URL,
      api: process.env.API_BASE_URL,
    },

    paystack: {
      secretKey: process.env.PAYSTACK_PRIVATE_KEY,
      publicKey: process.env.PAYSTACK_PUBLIC_KEY,
    },
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },
  test: {
    host: process.env.TEST_HOST,
    username: process.env.TEST_USERNAME,
    password: process.env.TEST_USERNAME,
    database: process.env.TEST_DATABASE,
    database_url: process.env.TEST_DATABASE_URL,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    bcryptSalt: process.env.BCRYPT_SALT,
    maxMediaFileSize: process.env.MAX_MEDIA_FILE_SIZE,
    url: {
      client: process.env.API_BASE_URL,
      api: process.env.CLIENT_BASE_URL,
    },
    paystack: {
      secretKey: process.env.PAYSTACK_PRIVATE_KEY,
      publicKey: process.env.PAYSTACK_PUBLIC_KEY,
    },
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },
  production: {
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.USERNAME,
    database: process.env.DATABASE,
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    bcryptSalt: process.env.BCRYPT_SALT,
    maxMediaFileSize: process.env.MAX_MEDIA_FILE_SIZE,
    url: {
      client: process.env.API_BASE_URL,
      api: process.env.CLIENT_BASE_URL,
    },
    paystack: {
      secretKey: process.env.PAYSTACK_PRIVATE_KEY,
      publicKey: process.env.PAYSTACK_PUBLIC_KEY,
    },
    cloudinary: {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  },

  blockio: {
    apiKey: process.env.BLOCKIO_API_KEY,
  },
};
