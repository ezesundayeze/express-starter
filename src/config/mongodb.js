const mongoose = require("mongoose");
const config = require("./env.js");

let env = process.env.NODE_ENV || "development";

let DB_URL;

switch (env) {
  case "development":
    DB_URL = config.development.database_url;
  case "production":
    DB_URL = config.production.database_url;
  case "test":
    DB_URL = config.test.database_url;
}

module.exports = async function connection() {
  try {
    await mongoose.connect(
      DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        autoIndex: true,
      },
      (error) => {
        if (error) return new Error("Failed to connect to database");
        console.log("connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
