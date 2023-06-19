const mongoose = require("mongoose");


const schema = mongoose.Schema;
const reservationSchema = new schema(
    {
        User: {
            type: String,
            required: true
        },

        nameHotel: {
            type: String,
            required: true
        },
        dateArrive: {
            type: String,
            required: true
        },
        dateSortie: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },
        state: {
            type: String,
            default: "non payeé"

        }




    }
);







const Reservation = mongoose.model("Reservation", reservationSchema);


module.exports = Reservation;