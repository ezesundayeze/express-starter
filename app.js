const app = require("./index");
const config = require("./src/config/env");
const errorMiddleware = require("./src/middlewares/error.middleware");
const nodeEnv = process.env.NODE_ENV;
const port = config[nodeEnv]?.port || 2020;

app.listen(port, async () => {
  //Initialize MongoDB

  console.log(
    `:::> Server listening on port ${port} @ http://localhost:${port}`
  );
});

errorMiddleware(app);

app.on("error", (error) => {
  console.error(`<::: An error occurred in our server: \n ${error}`);
});
