"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "unauthenticated") {
        router.push("/login");
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target); // Collect data from form
        const product = {
            title: formData.get("title"),
            description: formData.get("description"),
            price: parseFloat(formData.get("price")),
            img: formData.get("img"),
            item: formData.get("item"),
            taste: formData.get("taste"),
            availableQuantity: parseInt(formData.get("availableQuantity")),
            ingredients: formData.get("ingredients"),
        };

        // const res = await fetch("http://localhost:3000/api/product", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(product),
        // });

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/product`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
                cache: "no-store", // optional, prevents caching
            }
        );

        if (res.ok) {
            // alert("Product added successfully!");
            toast.success("Coffee added successfully!");
            e.target.reset(); // clear form
        } else {
            // alert("Failed to add product.");
            toast.error("Failed to add product.");
        }
    };

    if (status === "loading") return <p>Loading...</p>;

    return (
        <div className="max-w-xl mx-auto mt-10 py-5 px-10 border border-gray-300 mb-10 rounded shadow">
            <h1 className="text-3xl font-bold text-center mb-6">Add New Product</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name="title" placeholder="Product Title" className="input input-bordered w-full" required />
                <textarea name="description" placeholder="Product Description" className="textarea textarea-bordered w-full" required />
                <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
                <input type="text" name="img" placeholder="Image URL" className="input input-bordered w-full" required />
                <input type="text" name="item" placeholder="Item (e.g., Coffee)" className="input input-bordered w-full" required />
                <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" required />
                <input type="number" name="availableQuantity" placeholder="Available Quantity" className="input input-bordered w-full" required />
                <input type="text" name="ingredients" placeholder="Ingredients" className="input input-bordered w-full" required />
                <button type="submit" className="btn btn-primary mt-2">Add Product</button>
            </form>
        </div>
    );
}
