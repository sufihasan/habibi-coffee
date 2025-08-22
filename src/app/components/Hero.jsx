"use client";
import Image from 'next/image';
import React from 'react'

export default function Hero() {
    return (
        <div className='md:w-11/12 mx-auto mt-5'>
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    {/* <img
                        src="https://i.ibb.co.com/h1DzwPJP/coffehero1.jpg"
                        className="w-full h-96 rounded" /> */}
                    <div className="relative w-full h-96 rounded overflow-hidden">
                        <Image
                            src="https://i.ibb.co.com/h1DzwPJP/coffehero1.jpg"
                            alt="Discover top-rated services"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className='absolute  top-[60%] lg:top-[70%] md:left-[20%] lg:left-[30%] text-white text-center bg-gray-500/50 p-2'>
                        <h1 className='text-2xl'>Discover Best Coffees.</h1>
                        <p>We provide Best Coffees. It makes you more energy . Find one</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    {/* <img
                        src="https://i.ibb.co.com/MkwrDkvJ/coffeeheo2.jpg"
                        className="w-full h-96 rounded" /> */}
                    <div className="relative w-full h-96 rounded overflow-hidden">
                        <Image
                            src="https://i.ibb.co.com/MkwrDkvJ/coffeeheo2.jpg"
                            alt="Write and share reviews"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className='absolute top-[60%] lg:top-[70%] md:left-[20%] lg:left-[30%] text-white text-center bg-gray-500/40 p-2'>
                        <h1 className='text-2xl'>All time take coffee</h1>
                        <p>Our shop is 24 hr and 7 days . Enjoy our lovely Coffee</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    {/* <img
                        src="https://i.ibb.co.com/3mf82ZCN/coffehero3.jpg"
                        className="w-full h-96 rounded" /> */}

                    <div className="relative w-full h-96 rounded overflow-hidden">
                        <Image
                            src="https://i.ibb.co.com/3mf82ZCN/coffehero3.jpg"
                            alt="Manage your services easily"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className='absolute top-[60%] lg:top-[70%] md:left-[20%] lg:left-[30%] text-white text-center bg-gray-500/30 p-2'>
                        <h1 className='text-2xl'>Work Class Coffee</h1>
                        <p>We Provide world class coffee. So you can get all coffee here</p>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
