const response = require("./../utils/response");

// Possible error names
const errorNames = [
  "CastError",
  "JsonWebTokenError",
  "ValidationError",
  "SyntaxError",
  "MongooseError",
  "MongoError",
];

module.exports = (app) => {
  app.use("*", (req, res) => {
    res.status(400).send(response.error("Invalid request", true));
  });

  app.use((error, req, res, next) => {
    if (error.name == "CustomError") {
      res.status(error.status).send(response.error(error.message, true));
    } else if (error.name == "MongoError" && error.code == 11000) {
      // Catch duplicate key field error
      const field = Object.entries(error.keyValue)[0][0];
      res.status(400).send(response.error(`${field} already exists`, true));
    } else if (errorNames.includes(error.name)) {
      res.status(400).send(response.error(error.message, true));
    } else {
      res.status(500).send(response.error(error.message, true));
    }
  });

  return app;
};
