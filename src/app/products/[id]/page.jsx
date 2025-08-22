import dbConnect from '@/lib/dbconnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ProductsDetailsPage({ params }) {
    const p = await params;
    // const productCollection = dbConnect("coffees");
    // const data = await productCollection.findOne({ _id: new ObjectId(p.id) });
    // const res = await fetch(`http://localhost:3000/api/product/${p.id}`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/product/${p.id}`, {
        cache: 'no-store'
    });
    const data = await res.json();

    return (
        <div>
            {/* <p>product details {p.id}</p> */}
            <h1 className='text-3xl font-semibold text-center mt-5 underline'>Details</h1>

            <div className='md:border md:border-gray-300 shadow mt-5 max-w-3xl mx-auto p-5 rounded'>

                {/* <Image src={data.img} alt={data.title} width={314}
                    height={200} className='mx-auto w-40 h-50'></Image> */}

                <div className="relative w-40  h-60 mx-auto rounded overflow-hidden">
                    <Image
                        src={data.img}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <h1 className='text-center text-3xl'>{data.title}</h1>
                <p className='text-center mt-1'><span className='font-bold'>Price</span>{data.price}</p>
                <p><span className='font-bold'>Details:</span> {data.description}</p>
                <p><span className='font-bold'>Taste:</span> {data.taste}</p>
                <p><span className='font-bold'>Ingredients:</span> {data.ingredients}</p>
                <button className='btn btn-primary rounded mt-2'>Confirm Buy</button>


            </div>

        </div>
    )
}
