const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
     email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid em ail address");
            }
        }
     },
     mobile:{
        type:String,
        required:true,
        unique:true,
        maxlenght:10
     },
     password:{
        type:String,
        required:true,
        minlenght:6
     },
     cpassword:{
        type:String,
        required:true,
        minlenght:6
     },
     tokens : [
        {
            token: {
                type:String,
                required:true,
            }
        }
     ],
     carts : Array
});

const USER = new mongoose.model("USER",userSchema);

module.exports = USER;
