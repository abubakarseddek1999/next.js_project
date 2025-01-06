"use client";
import Table from '@/components/Table';
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [donors, setDonors] = useState([]);
    const [filteredDonors, setFilteredDonors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    // Fetch data from API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setDonors(data);
                setFilteredDonors(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    // Filter data based on search query and selected gender
    useEffect(() => {
        let filteredData = donors;

        // Search filter
        if (search) {
            filteredData = filteredData.filter((donor) =>
                donor.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Gender filter
        if (selectedGender) {
            filteredData = filteredData.filter((donor) =>
                donor.gender === selectedGender
            );
        }

        setFilteredDonors(filteredData);
    }, [search, selectedGender, donors]);

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

            {/* Search and Filter Section */}
            <div className="mb-5 flex gap-5 justify-center">
                <div>
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <select
                        value={selectedGender}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded"
                    >
                        <option value="">All Genders</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </div>

            {/* Table to display filtered data */}
            <Table donors={filteredDonors} />
        </div>
    );
};

export default Page;
