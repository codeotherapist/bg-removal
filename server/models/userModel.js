import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId : { type:String , required:true, unique:true },
    email : { type:String , required:true, unique:true },
    photo : { type:String , required:true },
    firstName : { type:String },
    Lastname  : { type:String },
    creditBalance : { type: Number, default:3 },
})

const userModel = mongoose.models.user || mongoose.model("user, userSchema")

export default userModel;