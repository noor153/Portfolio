const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({

    first_name:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number,required:true},
    last_name:{type:String,required:true},
    password:{type:String,required:true},

},
{
    timestamps:true
})


userSchema.pre("save",async function(next){
    console.log("hello from hock");
    this.password = await bcrypt.hash(this.password,7)
    console.log("hello after hock");
    next();
})


const Users = mongoose.model("Users",userSchema)
module.exports = Users;