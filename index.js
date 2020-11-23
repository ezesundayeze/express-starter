require("express-async-errors");
const app = require("express")();

// Pre-route middlewares
require("./src/middlewares/pre-route.middleware")(app);

// API routes
app.use("/api", require("./src/routes/index.route"));

module.exports = app;
