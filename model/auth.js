import mongoose from "mongoose";


const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
   
},{timeStamps:true})

const UserModel=mongoose.model("User",UserSchema)

export default UserModel;