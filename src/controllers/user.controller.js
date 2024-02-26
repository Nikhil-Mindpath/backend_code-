import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.models.js"

  const registerUser  =  asyncHandler( async (req,res)=>{
    // res.status(200).json({
    //     message : "ok"
    // })
    //get user details from frontend
    //validation -not empty
    //check if user already exists : username  : email
    //check for images, check for avatar
    //upload them to cloudinary ,avatar 
    //create user object - create entry in db
    // remove password and refresh token field from response 
    // check for user creation  
    // return res 

   const {fullname ,email ,username ,password} =  req.body;
   console.log(email);
   console.log(password);
   
   if(
    [fullname,email,username,password].some((field)=> field?.trim() ==="")
   ){
throw  new ApiError(400,"All fields are  is Required .... ")
   }
   const userExist = User.findOne({

    $or : [{username},{email}]
   }) 
   
   if(userExist){
    throw new ApiError(409,"User Already Exist ")
   }
   const avatarLocalPath  = req.files?.avatar[0]?.path;
   const ImageLocalPath =  req.files?.coverImage[0]?.path;
  
  if(!avatarLocalPath){
    throw new  ApiError(400,"Avatar file is Required")
  }

   return res.status(200).json({message : "EMAIL got succesfull"})

})

export {registerUser}