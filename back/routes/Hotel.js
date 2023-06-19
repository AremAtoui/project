const express = require("express");
const Hotel = require("../models/Hotel");


const hotelRouter = express.Router();

//add user
hotelRouter.post("/add", async (req, res) => {
  try {
    let newhotel = new Hotel(req.body);
    let result = await newhotel.save();
    res.send({ hotel: result, msg: "hotel is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all hotels
hotelRouter.get("/", async (req, res) => {
  try {

    let result = await Hotel.find();
    res.send({ hotels: result, msg: "all hotels" });
  } catch (error) {
    console.log(error);
  }
});
//delete hotel
hotelRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Hotel.findByIdAndDelete(req.params.id);
    res.send({ msg: "hotel is deleted" });
  } catch (error) {
    console.log(error);
  }
});
// update hotel
hotelRouter.put("/:id", async (req, res) => {
  try {
    let result = await Hotel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "hotel is updated" });
  } catch (error) {
    console.log(error);
  }
});


module.exports = hotelRouter;