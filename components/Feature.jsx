import React from 'react';

const Feature = () => {
    return (
        <div>
            {/* Call-to-Action Section */}
            <section className="bg-blue-100 text-white text-blue-800 py-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold">
                    Ready to Join Us?
                </h2>
                <p className="mt-4 text-lg">
                    Sign up today and start enjoying all the amazing features!
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-blue-00 hover:text-blue-700 text-lg rounded-lg">
                    Sign Up Now
                </button>
            </section>
        </div>
    );
};

export default Feature;