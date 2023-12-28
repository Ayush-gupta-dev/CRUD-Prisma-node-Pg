const express= require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const tutorialRoutes = require("./app/routes/tutuorial.routes")

dotenv.config();
const PORT = process.env.PORT || 8080;

var corsOptions={
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello from server")
})

app.use("/api",tutorialRoutes);

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})