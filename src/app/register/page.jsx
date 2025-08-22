"use client";
import Link from 'next/link'
import React from 'react'
import { registerUser } from '../actions/auth/registerUser';
// import { useFormState } from 'react-dom';

export default function Register() {
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     // console.log(name, email, password);
    //     await registerUser({ name, email, password });
    //     // registerUser({ name, email, password })
    // };

    return (
        <div>
            <h1 className='text-3xl text-center mx-auto mt-10 underline'>Register</h1>
            {/* onSubmit={handleSubmit} */}
            <form action={registerUser} className="w-full  mx-auto mt-5 md:max-w-lg space-y-8">
                <label className="form-control w-full">
                    <div className="label w-full">
                        <span className="label-text  font-bold">Name</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="name"
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label w-full">
                        <span className="label-text  font-bold">Email</span>
                    </div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label w-full">
                        <span className="label-text font-bold">Password</span>
                    </div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                    />
                </label>
                <button className="w-full rounded mt-3 h-12 bg-blue-500 hover:bg-blue-600 text-white font-bold">
                    Sign Up
                </button>

                <p className="text-center">
                    Don't Have an account?{" "}
                    <Link href="/login" className="text-blue-500 underline font-bold">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}
