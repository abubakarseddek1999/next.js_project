/* eslint-disable @next/next/no-img-element */
import Feature from "@/components/Feature";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Welcome to My Website
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
              Discover amazing features and services tailored for you.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="my-16 px-6 md:px-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
          Our Features
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500">Feature One</h3>
            <p className="mt-4 text-gray-600">
              Brief description of the feature and how it benefits the user.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500">Feature Two</h3>
            <p className="mt-4 text-gray-600">
              Brief description of the feature and its purpose.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-500">Feature Three</h3>
            <p className="mt-4 text-gray-600">
              Explanation of the feature and its benefits.
            </p>
          </div>
        </div>
      </section>
      <Feature />
    </main>
  );
}
