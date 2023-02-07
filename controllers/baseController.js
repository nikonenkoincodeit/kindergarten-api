class BaseCtrl {
  constructor(model) {
    this.model = model;
  }

  getAll = (req, res) => {
    this.model.find({}, (err, data) => {
      if (err) {
        return res.status(400).json({ message: "Error: " + err });
      }
      res.json(data);
    });
  };

  getById = (req, res) => {
    this.model.findById(req.params.id, (err, data) => {
      if (err) {
        return res.status(400).json({ message: "Error: " + err });
      }
      res.json(data);
    });
  };

  deleteById = (req, res) => {
    this.model.findByIdAndRemove(req.params.id, (err, data) => {
      if (err) {
        return res.status(400).json({ message: "Error: " + err });
      }
      res.json({
        message: "Delete",
      });
    });
  };
}

module.exports = BaseCtrl;
