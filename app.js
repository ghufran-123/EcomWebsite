const express = require("express");
const app = express();

// routes
const signup = require("./routes/SignUp")
const logined = require("./routes/logined")


// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use("/SignUp",signup);
app.use("/logined",logined);


// starting Server
app.listen(8000,()=>{
    console.log("Server Started, Listening on post 8000");
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/htmls/home.html")
})