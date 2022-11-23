const express = require("express");
const router = express.Router();
const obj = require("../services/user");
const { err } = require("../utilities/errorMaker");

router.route("/")
.get((req,res,next)=>{
    res.sendFile("C:/Users/ACS/Desktop/Work/Web/Ecom/public/htmls/index.html")
})
.post((req,res)=>{
    try {
        obj.addUser(req.body);
        res.send("hello")
    } catch (error) {
        res.status(404).send(error.massage)
    }
})
module.exports=router;