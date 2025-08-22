import dbConnect from "@/lib/dbconnect";

// export async function GET() {
//     try {
//         const collection = dbConnect("coffees");
//         const data = await collection.find().toArray();
//         return new Response(JSON.stringify(data), { status: 200 });
//     } catch (err) {
//         console.error(err);
//         return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
//     }
// }

export async function POST(req) {
    try {
        const data = await req.json();
        const collection = dbConnect("coffees");
        const result = await collection.insertOne(data);
        return new Response(JSON.stringify(result), { status: 201 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Failed to add product" }), { status: 500 });
    }
}
