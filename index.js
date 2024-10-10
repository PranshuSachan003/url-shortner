
const express = require("express");
const connectToDB = require('./databaseConnection')
const router = require('./routes/url')

const app = express();
const PORT = 8001;
connectToDB()

app.use(express.json())
app.use('/api', router)

app.listen(PORT, ()=>{console.log(`server running on ${PORT}`)})