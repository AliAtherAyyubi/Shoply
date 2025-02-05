import ConnectToDB from "@/backend/config/db";
import Product from "@/backend/models/product";


export default handler =async (req,res)=>{
   await ConnectToDB();
   let p= await Product.find();
   
   return res.status(200).json({p});
}

