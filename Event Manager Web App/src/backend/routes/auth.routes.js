import express from 'express'
import { login } from '../controller/login.controller.js'
import { createUser } from '../controller/signup.controller.js'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post('/token',(req,res) =>{
  const {token} = req.body;
  if(token === null || token === undefined || token === ""){
      return res.status(401).send({valid:false})
  }
  jwt.verify(token,"Secret key",(err)=>{
      if(err){
        return  res.status(403).send({valid:false})
      }else{
        return res.status(200).send({valid:true})
      }

      
  }) 
})
router.post('/signup',createUser);
router.post('/login',login);
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
  });

  export{
    router
}