const express = require("express");
const connectDB = require("./config/dbConnect");
const cors = require("cors")
console.clear();
const app = express("");
require("dotenv").config();
app.use(cors())
//connectDB
connectDB();
//routes

app.use(express.json());
app.use("/user", require("./routes/User"));
app.use("/hotel", require("./routes/Hotel"));
app.use("/reservation", require("./routes/Reservation"));
// app.use("/", require("./routes/Upload"))
//server
const PORT = process.env.PORT;
app.listen(PORT, (err) => err ? console.log(err) : console.log("server is runnig"));