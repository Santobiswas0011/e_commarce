require('dotenv').config();
const express = require("express");
const app = express();

const PORT =8002;

const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const user_router=require('./Router/userRouter');

const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(user_router);


mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log('Database is connected');
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});
