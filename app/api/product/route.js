import ConnectToDB from "@/backend/config/db";
import Product from "@/backend/models/product";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectToDB();

    const body = await req.json();
    const { productId, title, description, price, size, address } = body;

    const product = new Product({
      productId,
      title,
      description,
      price,
      size,
      address,
    });

    await product.save();

    return NextResponse.json({ message: "Product added successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error while adding product:", error);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}
