import { showErrorToast } from "@/app/utils/toast";
import ConnectToDB from "@/backend/config/db";
import User from "@/backend/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(req) {
  try {
    await ConnectToDB();
    const { email, password } = await req.json();
    console.log(email, password);

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exist" }, { status: 400 });
    }

    // Create new user
    let user = new User({
      // userId: new mongoose.Types.ObjectId()._id,
      email: email,
      password: password
    });

    await user.save();
    return NextResponse.json({ message: "Your account created successfully" }, { status: 201 });
    

  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await ConnectToDB();
    
    // Get email and password from query parameters
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if password matches
    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Return user data (excluding password)
    const userData = {
      id: user._id,
      email: user.email
    };

    return NextResponse.json({ 
      message: "Login successful",
      user: userData 
    }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}