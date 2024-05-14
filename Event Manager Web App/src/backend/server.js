import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import { router as EventRoutes } from "./routes/event.routes.js";
import { mongodb_connection } from "../api/mongodb.js";


//Create Web Server Insatnce using express.js
const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/events',EventRoutes)
//Connect to MongoDB
mongoose.connect(mongodb_connection)
.then(()=>{
    console.log("Connected to Database");
    app.listen(PORT,()=>{
        console.log(`Server listening on port ${PORT}`)
    })
})
.catch(()=>{
    console.log('Connection to database failed')
})