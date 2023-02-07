const News = require("../models/news");
const BaseCtrl = require("./baseController");

class NewsCtrl extends BaseCtrl {
  constructor(model) {
    super(model);
  }

  createEntity = async (req, res) => {
    try {
      const news = await new News(req.body);
      const data = await news.save();
      res.json({ message: "Category was created", data });
    } catch (err) {
      res.status(400).json({ message: "Error created " + err });
    }
  };

  updateEntity = async (req, res) => {
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
  };

  getByYear = async (req, res) => {
    try {
      const news = await News.find({ year: req.query.year });
      res.json(news);
    } catch (error) {
      res.status(400).json({ message: "Error: " + err });
    }
  };
}
module.exports = new NewsCtrl(News);
