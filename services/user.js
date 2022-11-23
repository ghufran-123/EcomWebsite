const models = require("../Models/user") 
const obj = {};

obj.addUser = async (user)=>{
    var state = await models.checkUser(user);
    console.log(state);
    if(state[0]==[])
    {
        models.adduser(user);    
    }
    else{
        console.log("else me hai")
       const err = Error("user already exist")
       err.status=400;
       throw err;
    }
}

module.exports = obj;