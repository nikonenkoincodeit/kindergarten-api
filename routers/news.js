const router = require("express").Router();

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

router.post("/", (req, res) => {});

router.update("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
