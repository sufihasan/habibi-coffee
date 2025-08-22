"use server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbconnect";

// export const registerUser = async (payload) => {
//     // console.log(payload);
//     const userCollection = dbConnect("users");

//     // Validation
//     const { email, password } = payload;
//     if (!email || !password) return null;

//     const user = await userCollection.findOne({ email: payload.email })

//     if (!user) {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         payload.password = hashedPassword;
//         const result = await userCollection.insertOne(payload);
//         result.insertedId = result.insertedId.toString();
//         return result;
//     }

//     return null;

// }


export const registerUser = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) return null;


    const userCollection = dbConnect("users");
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
        return null; // already exists
    }



    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userCollection.insertOne({
        name,
        email,
        password: hashedPassword,
    });

    result.insertedId = result.insertedId.toString();
    return result;

};
