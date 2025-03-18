import ConnectToDB from "@/backend/config/db";
import Product from "@/backend/models/product";

export default async function handler(req, res) {
  await ConnectToDB();
  console.log("🔹 Request Body:", req.body);

  if (req.method === "POST") {
    try {
      const { productId, title, description, price, size, address } = req.body;
      const product = new Product({
        productId,
        title,
        description,
        price,
        size,
        address,
      });
      console.log("creating product");
      await product.save();
      console.log("Product added successfully");
      res.status(200).json({ message: "Product added successfully" });
    } catch (error) {
      console.log("Error while adding product");
      // res.status(500).json({ message: "Error while adding product" });
    }
  }
}
