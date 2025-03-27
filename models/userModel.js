const mongoose = require("mongoose")

//schema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"email is required and must be unique"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required and must be unique"],
        unique:true
    }
},{timestamps:true}
);


const userModel = mongoose.model("users", userSchema)

module.exports = userModel;
