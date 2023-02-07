require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const newsRouters = require("../routers/news");

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/news", newsRouters);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log("Server started! ", port);
});
