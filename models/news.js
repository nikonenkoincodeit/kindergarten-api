const db = require("../ext/db");

const schema = db.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 255,
      minLength: 2,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      maxLength: 1000,
      required: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
    year: {
      type: String,
      maxLength: 4,
      required: true,
    },
    // picture: {
    //   type: String,
    //   default:
    //     "https://img1.akspic.ru/crops/0/9/1/1/7/171190/171190-nacionalnyj_park_kaziranga-atmosfera-mir-prirodnyj_landshaft-purpur-7680x4320.png",
    // },
  },
  { versionKey: false }
);

module.exports = db.model("News", schema);
