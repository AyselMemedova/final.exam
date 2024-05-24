const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const finalSchema = mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  description: String,
  count: Number,
  totalPrice: Number,
});

const final = mongoose.model("final", finalSchema);

app.get("/api/final", async (req, res) => {
  const resp = await final.find();
  res.send(resp);
});

app.post("/api/final", async (req, res) => {
  const { title, price, image,description, count, totalPrice } = req.body;
  const newFinal = new final({
    title: title,
    price: price,
    image: image,
    description: description,
    count: count,
    totalPrice: totalPrice,
  });
  await newFinal.save();
  res.send("item elave olundu");
});

app.put("/api/final/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await final.findByIdAndUpdate(id, { ...req.body });
  res.send("updated");
});

app.delete("/api/final/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await final.findByIdAndDelete(id, { ...req.body });
  // await final.save();
  res.send("delete");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(" api running");
});
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((resp) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log("db not connected");
  });