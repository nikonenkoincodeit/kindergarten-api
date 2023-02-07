const router = require("express").Router();
const News = require("../models/news");
const NewsCtrl = require("../controllers/newsController");

router.get("/year", NewsCtrl.getYear);

router.get("/:id", NewsCtrl.getById);

router.get("/", NewsCtrl.getByYear);

router.post("/", NewsCtrl.createEntity);

router.patch("/:id", NewsCtrl.updateEntity);

router.delete("/:id", NewsCtrl.deleteById);

module.exports = router;
