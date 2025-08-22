"use server";

import bcrypt from "bcrypt"
import dbConnect from "@/lib/dbconnect";

export const loginUser = async (payload) => {
    const { email, password } = payload;

    const userCollection = dbConnect("users");

    const user = await userCollection.findOne({ email });
    // console.log(user);

    if (!user) {
        return null;
    }

    const isPasswordOK = await bcrypt.compare(password, user.password);
    if (!isPasswordOK) {
        return null;
    }

    return user;

}