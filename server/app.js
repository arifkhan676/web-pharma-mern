require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");
const path = require('path')

const Products = require("./models/productSchema.js")
const DefaultData = require("./defaultdata.js");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

//static files
//app.use(express.static(path, join(__dirname, "../client-side/build")))
const port = 8005;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

DefaultData();