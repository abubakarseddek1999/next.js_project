"use client";
import Table from '@/components/Table';
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setDonors(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="h-screen bg-gray-100 flex justify-center items-center">
                <h2 className="text-4xl font-bold text-blue-600">Loading...</h2>
            </div>
        );
    }

    return (
        <div className="h-screen bg-gray-100 py-10 px-5">
            <h2 className="mb-8 tracking-wider text-4xl font-bold text-center text-blue-600">
                Blood Donor Data
            </h2>
            <Table donors={donors} />
        </div>
    );
};

export default Page;
