const express = require("express");
const router = express.Router();
router.get((req,res,next)=>{
    res.sendFile("C:/Users/ACS/Desktop/Work/Web/Ecom/public/htmls/afterlogin.html")
})