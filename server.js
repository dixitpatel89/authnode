const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/ErrorHandler");

connectDb();
const app = express();

const port =process.env.PORT || 5000;

const bodyParse = require("body-parser");

app.use(bodyParse.json());
app.use(express.json());
app.use('/api/contacts',require("./routes/contactRoutes"));
app.use('/api/users',require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})