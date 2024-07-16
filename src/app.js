require("dotenv").config();
const express = require("express");

const routeNotFoundMiddleware = require("./middlewares/route-not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const responseHtml =
    "<h1>Store API</h1><a href='/app/v1/products'>products route</a>";
  res.send(responseHtml);
});

app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    console.log("Connected to the database");
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
