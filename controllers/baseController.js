class BaseCtrl {
  constructor(model) {
    this.model = model;
  }

  getYear = async (req, res) => {
    try {
      const year = await this.model.distinct("year");
      res.json({ year });
    } catch (err) {
      res.status(400).json({ message: "Error: " + err });
    }
  };

  // getAll = (req, res) => {
  //   this.model.find({}, (err, data) => {
  //     if (err) {
  //       return res.status(400).json({ message: "Error: " + err });
  //     }
  //     res.json(data);
  //   });
  // };

  getById = async (req, res) => {
    try {
      const news = await this.model.findById(req.params.id);
      res.json(news);
    } catch (err) {
      res.status(400).json({ message: "Error: " + err });
    }
  };

  deleteById = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await this.model.findByIdAndDelete(id);
      res.json({
        message: "Delete",
      });
    } catch (err) {
      res.status(400).json({ message: "Error: " + err });
    }
  };
}

module.exports = BaseCtrl;
