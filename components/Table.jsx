import React from 'react';
import { MdDelete } from "react-icons/md";
const Table = ({ donors }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Username</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Phone</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase">delete</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.length > 0 ? (
                        donors.map((donor, index) => (
                            <tr key={index} className="even:bg-gray-100 odd:bg-gray-50">
                                <td className="px-4 py-3 text-sm">{donor.name}</td>
                                <td className="px-4 py-3 text-sm">{donor.username}</td>
                                <td className="px-4 py-3 text-sm">{donor.email}</td>
                                <td className="px-4 py-3 text-sm">{donor.phone}</td>
                                <td className="px-4 py-3 text-sm"><MdDelete className='text-red-500 cursor-pointer' size={24} onClick={() => console.log(donor.id)} /></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="4"
                                className="px-4 py-3 text-center text-gray-500 text-sm"
                            >
                                No data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;