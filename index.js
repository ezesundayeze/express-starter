require("express-async-errors");
const app = require("express")();

// Pre-route middlewares
require("./src/middlewares/pre-route.middleware")(app);

// API routes
app.use("/api", require("./src/routes/index.route"));

// Ping route for testing connection
app.get("/ping", (req, res) => res.status(200).send("Hello world!"));

module.exports = app;
