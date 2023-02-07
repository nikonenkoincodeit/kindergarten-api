require("dotenv").config();

const express = require("express");
const app = express();

const newsRouters = require("../routers/news");

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/news", newsRouters);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log("Server started! ", port);
});
