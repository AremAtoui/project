const mongoose = require("mongoose");
const schema = mongoose.Schema;

const hotelSchema = new schema({
    image: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },
    images: {
        type: Array,

    },


})

const Hotel = mongoose.model("Hotel", hotelSchema);


module.exports = Hotel;
