const mongoose = require("mongoose");

const devCredits = new mongoose.Schema({
    credits: {
        type: Number,
        required: true,
    },
    id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("devCredits", devCredits);