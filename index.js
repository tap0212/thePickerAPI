require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")

const app = express();

const bodyParser = require("body-parser")
const cors = require("cors")

//routes
const colorRoute = require("./Routes/color")
//DB connection
mongoose
    .connect(
        process.env.DATABASE,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify: false
        }
    )
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));
//middleware
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/api", colorRoute)


//port
const port = process.env.PORT || 7000;
//server
app.listen(port,() => {
    console.log(`app is running at ${port}`);
})    