const db = require("mongoose");
db.set("strictQuery", false);

db.connect(process.env.DB_CONNECT + process.env.DB_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
