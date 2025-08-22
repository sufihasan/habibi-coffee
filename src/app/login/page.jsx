"use client";
import Link from 'next/link'
import React from 'react'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Login() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        toast("Loging...")

        try {
            const response = await signIn("credentials", {
                email,
                password,
                callbackUrl: '/products',
                redirect: false
            });

            if (response.ok) {
                router.push('/products');
                // form.reset();
                toast.success('successfully Login');
            }
            else {
                // alert('autitation faild')
                toast.error("login faild")
            }

        } catch (error) {
            // alert('auth faild in login');
            toast.error("login faild")
        }



    };
    return (
        <div>
            <h1 className='text-3xl text-center mx-auto mt-10 underline'>Login</h1>
            <form onSubmit={handleSubmit} className="w-full  mx-auto mt-5 md:max-w-lg space-y-8">
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
                <button className="w-full h-12 mt-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">
                    Sign In
                </button>

                <p className="text-center">
                    Already have an account?{" "}
                    <Link href="/register" className="text-blue-500 underline font-bold">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    )
}
