const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");
const path = require("path");

//config dotenv

dotenv.config();

//database connection

connectDB()

//PORT
const PORT = 8080 || process.env.PORT

//rest object

const app = express();

//middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes

app.use("/api/v1/users", require("./routes/userRouter"));
app.use("/api/v1/transactions", require("./routes/transactionRoutes"))



//static files

app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
//listen Server

app.listen(PORT, () => {
    console.log(`Server Running on port No. ${PORT} Congratulation.`)
});
