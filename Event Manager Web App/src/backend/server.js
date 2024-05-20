import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import { router as EventRoutes } from "./routes/event.routes.js";
import { router as AuthRoutes } from "./routes/auth.routes.js";
import { mongodb_connection } from "../api/mongodb.js";
import cookieParser from 'cookie-parser'


//Create Web Server Insatnce using express.js
const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/events',EventRoutes)
app.use('/api/auth', AuthRoutes)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin","http://localhost:5173/" ); // Replace with your frontend domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials (cookies, etc.)

  // Pass to next layer of middleware
  next();
});
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