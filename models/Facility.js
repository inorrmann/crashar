const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    area: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        uppercase: true,
        trim: true
    }
})

const Facility = mongoose.model("Facility", FacilitySchema);
module.exports = Facility;