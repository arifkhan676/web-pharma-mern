require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");

const Products = require("./models/productSchema.js")
const DefaultData = require("./defaultdata.js");
const port = process.env.port || 8005;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

DefaultData();