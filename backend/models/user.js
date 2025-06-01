import mongoose from "mongoose";

//

const userSchema= mongoose.Schema({
    userId:String,
    // name:{type:String, default:""},
    email: {type:String, unique:true},
    password:String,
    phoneNumber:Number,
    address:String,

});

const User = mongoose.models.user || mongoose.model('user', userSchema);
//
export default User;