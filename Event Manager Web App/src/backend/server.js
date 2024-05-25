import mongoose from "mongoose";
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import { router as EventRoutes } from "./routes/event.routes.js";
import { router as AuthRoutes } from "./routes/auth.routes.js";
import cookieParser from 'cookie-parser'
import { mongodb_connection,port } from "../../config.js";
import jwt from 'jsonwebtoken'

//Create Web Server Insatnce using express.js
const app = express();
//const PORT = 4000;

//Middleware

// const validateToken = (req,res,next) =>{

//     const token = req.token;

//     if(token == null){
//         return res.sendStatus(401).send({message:'User not logged in'})
//     }
//     jwt.verify(token,"Secret key",(err,user)=>{
//         if(err){
//             return res.sendStatus(403).send({message:"Invalid Token"})
//         }
//         req.user = user;
//         next();
//     }) 
// }
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use('/api/events',EventRoutes)
app.use('/api/auth', AuthRoutes)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use((req, res, next) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin","http://localhost:3000/" ); // Replace with your frontend domain
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
    app.listen(port,()=>{
        console.log(`Server listening on port ${port}`)
    })
})
.catch(()=>{
    console.log('Connection to database failed')
})