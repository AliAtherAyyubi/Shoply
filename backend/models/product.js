import mongoose from "mongoose";

//

const productSchema= mongoose.Schema({
    productId:String,
    name:String,
    description: String,
    price:double,
    size:double,
    address:String,

});

const User= mongoose.model('User',userSchema);
//
export default User;