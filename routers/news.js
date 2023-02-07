const router = require("express").Router();
const News = require("../models/news");

router.get("/news", (req, res) => {});

router.get("/:id", (req, res) => {
  News.findById(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({ message: "Error: " + err });
    }
    res.json(data);
  });
});

router.get("/", (req, res) => {});

router.post("/", (req, res) => {
  const news = new News(req.body);

  news.save((err, data) => {
    if (err) {
      return res.status(400).json({ message: "Error created " + err });
    }
    res.json({ message: "Category was created", data });
  });
});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  News.findByIdAndDelete(id, (err, data) => {
    if (err) {
      return res.status(400).json({ message: "Error: " + err });
    }
    res.json({
      message: "Delete",
    });
  });
});

module.exports = router;
