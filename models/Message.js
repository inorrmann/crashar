const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    siteOwner: {
        type: String,
        trim: true,
    },
    ownerName: {
        type: String,
        trim: true,
    },
    siteGuest: {
        type: String,
        trim: true,
    },
    guestName: {
        type: String,
        trim: true,
    },
    siteId: {
        type: String,
        trim: true,
    },
    people: {
        type: Number,
    },
    tents: {
        type: Number,
    },
    cars: {
        type: Number,
    },
    campground: {
        type: String,
        trim: true,
    },
    arrival: {
        type: Date,
    },
    departure: {
        type: Date,
    },
    messages: [
        {
            author: {
                type: String,
                trim: true,
            },
            text: {
                type: String,
                trim: true,
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})


const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;