const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    name: String,
    direction: String,
    city: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const store = mongoose.model("store", storeSchema);
module.exports = store;