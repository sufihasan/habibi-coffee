import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbconnect';
import { ObjectId } from 'mongodb';

export const GET = async (req, { params }) => {
    const p = await params;
    const productCollection = dbConnect("coffees");
    const data = await productCollection.findOne({ _id: new ObjectId(p.id) });
    return NextResponse.json(data);
}