const router = require("express").Router();
const News = require("../models/news");

router.get("/year", async (req, res) => {
  try {
    const year = await News.distinct("year");
    res.json({ year });
  } catch (err) {
    res.status(400).json({ message: "Error: " + err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.json(news);
  } catch (error) {
    res.status(400).json({ message: "Error: " + err });
  }
});

router.get("/", async (req, res) => {
  try {
    const news = await News.find({ year: req.query.year });
    res.json(news);
  } catch (error) {
    res.status(400).json({ message: "Error: " + err });
  }
});

router.post("/", async (req, res) => {
  try {
    const news = await new News(req.body);
    const data = await news.save();
    res.json({ message: "Category was created", data });
  } catch (err) {
    res.status(400).json({ message: "Error created " + err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await News.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });

    res.json({
      message: "Updated",
      id: data._id,
    });
  } catch (err) {
    res.status(400).json({ message: "Error update " + err });
  }
});

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
