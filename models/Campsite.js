const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampsiteSchema = new Schema({
    campgroundID: {
        type: String,
        trim: true
    },
    number: {
        type: String,
        trim: true
    },
    loop: {
        type: String,
        trim: true
    },
    accessible: {
        type: Boolean
    },
    image: {
        type: String,
        trim: true
    }
})

const Campsite = mongoose.model("Campsite", CampsiteSchema);
module.exports = Campsite;