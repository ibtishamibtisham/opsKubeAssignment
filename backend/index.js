const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/",
  {
    dbName: "bookstore",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? "yes" : "no")
);
//backend connection
const app = express();
const cors = require("cors");
// const { Router } = require("express");
app.use(express.json());
app.use(cors());

//schema
const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: { type: Number, required: true },
    status: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);
const bookmodel = mongoose.model("books", bookSchema);
app.get("/", (req, res) => {
  bookmodel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/book", async (req, res) => {
  let books = req.body;
  let users = new bookmodel(books);
  await users.save();
  res.json(users);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listen to 5001");
});
