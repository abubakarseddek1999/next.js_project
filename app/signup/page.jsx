"use client";
import React, { useState } from "react";
import Image from 'next/image';

const Page = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        console.log(" username:", email, "Password:", password);
        // alert("Login Successful!");
        // Add your authentication logic here
        const resp = await fetch('http://localhost:3000/signup/api', {
            method: 'POST',
            body: JSON.stringify({
                userName,
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(resp);
        if (resp.status === 200) {
            alert('Signup Successful!');
            event.target.reset();
        }

    };

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100 min-h-screen">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-5">
                <Image
                    className="w-full"
                    src="https://i.postimg.cc/pd2V3r2y/login-img.png"
                    width={500}
                    height={500}
                    alt="Picture of the Login Page"
                />
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center px-5 py-10 lg:py-0">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign UP</h2>
                    {/* Login Form ........................................*/}
                    <form onSubmit={handleSignup} className="space-y-6">

                        {/* Name Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Do not have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page;
