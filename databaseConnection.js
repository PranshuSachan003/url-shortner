
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/short-url";

async function connectToDB() {
    try {
        await mongoose.connect(url);
        console.log('Connection successful');
    } catch (err) {
        console.log('Connection failed:', err);
    }
}

module.exports = connectToDB


