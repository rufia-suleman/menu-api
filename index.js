const express = require("express")
const morgan = require("morgan")
const connectDB = require("./config/connectDB")
const foodRoute = require("./routes/foodRoute")

require("dotenv").config()

connectDB()

const app = express()
//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(foodRoute)


const PORT = process.env.PORT||9000

//Home route
app.get("/", (req, res)=>{
    res.json("Welcome to my Menu API")
})

app.listen(PORT, ()=>{
    console.log("Server is UP!!!")
})