const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.BD_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log("Connection to mongodb succesfull");
    } catch (e) {
        console.log("Error connecting to mongodb ", e);
        throw new Error("Error connecting to mongodb");
    }
};

module.exports = { dbConnection };