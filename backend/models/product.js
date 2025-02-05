import mongoose from "mongoose";

//

const productSchema= mongoose.Schema({
    productId:String,
    title:String,
    description: String,
    price:Number,
    size:{type: Number},
    address:{type:String},

});

mongoose.models={}
const Product= mongoose.model('products',productSchema);
//
export default Product;