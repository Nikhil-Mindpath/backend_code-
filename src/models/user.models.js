import mongoose from "mongoose";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema  = new  mongoose.Schema({
    username : {
        type :String,
        required : true,
        unique : true,
        lowercase : true,
        index : true ,
        trim :true
    },
    email : {
        type :String,
        required : true,
        unique : true,
        lowercase : true,
    },
    fullname: {
        type :String,
        required : true,
        trim : true,
        index : true
    },
    avatar :{
        type : String , //cloudinarry url in future can be used 
        required : true
    },
    coverImage :{
        type : String ,
    },
    password :{
     type : String,
     required : [true,'Password is required ']
    },
    watchHistory :[{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Video"
    }],
    refreshToken :{
        type :String ,
        
    }


},{timestamps : true})

userSchema.pre("save",async function(next){
    this.password()
    next();
})

export const User  =  mongoose.model("User",userSchema)