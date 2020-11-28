require("express-async-errors");
const app = require("express")();
const connection = require("./src/config/mongodb");

(async function db() {
  await connection();
})();

// Pre-route middlewares
require("./src/middlewares/pre-route.middleware")(app);

// API routes
app.use("/api/v1", require("./src/routes/index.route"));

module.exports = app;
