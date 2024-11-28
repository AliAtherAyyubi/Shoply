import mongoose from "mongoose";

//

const userSchema= mongoose.Schema({
    userId:String,
    name:String,
    email: {type:String, unique:true},
    password:String,
    phoneNumber:Number,
    address:String,

});

const User= mongoose.model('User',userSchema);
//
export default User;