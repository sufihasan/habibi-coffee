// 'use client';
import dbConnect from '@/lib/dbconnect';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default async function ProductsSection() {


    // const data = [
    //     {

    //         "title": "Espresso1",
    //         "price": 2.50,
    //         "description": "A strong and bold shot of pure coffee, rich in flavor and aroma.",
    //         "img": "https://i.ibb.co.com/d4kvPhnH/6.png",
    //         "item": "Coffee",
    //         "taste": "Strong, bold, bitter",
    //         "availableQuantity": 50,
    //         "ingredients": "Coffee beans, Water"
    //     },
    //     {

    //         "title": "Cappuccino",
    //         "price": 3.50,
    //         "description": "A classic Italian coffee with equal parts espresso, steamed milk, and foam.",
    //         "img": "https://i.ibb.co.com/nNN8bm5B/5.png",
    //         "item": "Coffee",
    //         "taste": "Creamy, smooth, slightly bitter",
    //         "availableQuantity": 40,
    //         "ingredients": "Espresso, Steamed milk, Milk foam"
    //     },
    //     {

    //         "title": "Latte",
    //         "price": 3.80,
    //         "description": "Smooth espresso with steamed milk, topped with a light foam layer.",
    //         "img": "https://i.ibb.co.com/WvJDhwtY/4.png",
    //         "item": "Coffee",
    //         "taste": "Mild, milky, smooth",
    //         "availableQuantity": 35,
    //         "ingredients": "Espresso, Steamed milk, Milk foam"
    //     },
    //     {

    //         "title": "Mocha",
    //         "price": 4.20,
    //         "description": "A delicious mix of espresso, chocolate, and steamed milk with whipped cream.",
    //         "img": "https://i.ibb.co.com/fYMHBgtH/3.png",
    //         "item": "Coffee",
    //         "taste": "Sweet, chocolatey, creamy",
    //         "availableQuantity": 25,
    //         "ingredients": "Espresso, Steamed milk, Cocoa powder, Whipped cream"
    //     },
    //     {

    //         "title": "Cold Brew",
    //         "price": 3.00,
    //         "description": "Brewed slowly in cold water for a refreshing and smooth coffee taste.",
    //         "img": "https://i.ibb.co.com/KjSyN7Rw/1.png",
    //         "item": "Coffee",
    //         "taste": "Smooth, low acidity, refreshing",
    //         "availableQuantity": 30,
    //         "ingredients": "Coffee beans, Cold water, Ice"
    //     },
    //     {

    //         "title": "Caramel Frappuccino",
    //         "price": 4.50,
    //         "description": "A sweet, blended iced coffee with caramel syrup and whipped cream.",
    //         "img": "https://i.ibb.co.com/67dGSp2v/2.png",
    //         "item": "Coffee",
    //         "taste": "Sweet, caramelized, creamy",
    //         "availableQuantity": 20,
    //         "ingredients": "Espresso, Milk, Caramel syrup, Ice, Whipped cream"
    //     }
    // ]

    const serviceCollection = dbConnect("coffees");
    const data = await serviceCollection.find({}).limit(3).toArray();



    // const truncateText = (text, wordLimit) => {
    //     if (!text) return '';
    //     const words = text.split(' ');
    //     if (words.length <= wordLimit) {
    //         return text;
    //     }
    //     return words.slice(0, wordLimit).join(' ') + '...';
    // };

    const truncateText = (text, charLimit) => {
        if (!text) return '';
        if (text.length <= charLimit) return text;
        return text.slice(0, charLimit) + '...';
    };

    return (
        <div>
            <h1 className='text-center text-3xl mx-auto font-semibold mt-10 mb-5'>Buy a Coffee</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5'>
                {data.map((item) => {
                    return <div className='border border-gray-300 px-5 pb-5 rounded' key={item._id} >
                        {/* <div className=''>
                            <Image style={{ width: "auto", height: "auto" }} src={item.img} alt={item.title} width={314} height={200} className='mx-auto w-40 h-50'></Image>

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
                        <p className='text-justify'>{truncateText(item.description, 80)}</p>
                        <Link href={`/products/${item._id}`}>
                            <button className='btn btn-primary rounded mt-2'>Details</button>
                        </Link>
                    </div>
                })}
            </div>
            <Link className='flex justify-between ' href={'/products'}>
                <button className='btn cursor-pointer btn-primary rounded mt-3 mb-10 mx-auto'>Buy More Coffee</button>
            </Link>
        </div>
    )
}
