const {getUserSchema} = require("../utilities/connection")
const obj = {};
var temp = 0;
obj.checkUser = async (user)=>{
    var Username = user.Username;
    const model = await getUserSchema();
    var temp = await model.find({Username});
    console.log(temp);
    return temp
}
obj.adduser =async (user)=>{
    console.log(user.customerId);
    const model = await getUserSchema();
    model.create(user);
}

module.exports = obj;