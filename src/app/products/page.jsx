export const dynamic = "force-dynamic";
import dbConnect from '@/lib/dbconnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function AllProducts() {
    const serviceCollection = dbConnect("coffees");
    const data = await serviceCollection.find().toArray();
    return (
        <div>
            <h1 className='text-3xl text-center mx-auto mt-5 underline'>Coffees</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 my-10'>
                {data.map((item) => {
                    return <div className='border border-gray-300 px-5 pb-5 rounded' key={item._id} >
                        {/* <div className=''>
                            <Image src={item.img}
                             alt={item.title} width={314}
                              height={200} className='mx-auto
                               w-40 h-50'></Image>

                        </div> */}
                        <div className="relative w-40  h-60 mx-auto rounded overflow-hidden">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <p className='text-center font-semibold mt-3'> {item.price} $</p>
                        <h1 className='text-center text-2xl'>{item.title}</h1>
                        <p className='text-justify'>{item.description}</p>
                        <Link href={`/products/${item._id}`}>
                            <button className='btn btn-primary rounded mt-2'>Details</button>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}
