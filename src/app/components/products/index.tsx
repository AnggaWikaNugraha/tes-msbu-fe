'use client'

import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { fetchProducts } from '@/lib/api/products';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Products = () => {
    const { data: session, status } = useSession(); // Mengambil session
    const token = session?.accessToken; // Ambil token dari session

    // Menggunakan useQuery untuk mengambil data produk
    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchProducts(token!),
        enabled: !!token, // Pastikan query hanya dijalankan jika token ada
    });

    // Debugging error dan loading status
    useEffect(() => {
        if (isLoading) console.log('Loading data...');
        if (error) console.error('Error loading data:', error);
    }, [isLoading, error]);

    if (isLoading) return <div className="text-center text-gray-500">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error loading products: {error.message}</div>;

    return (
        <div className="p-6 space-y-4">
            <Table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
                <TableHeader className="bg-blue-100">
                    <TableRow>
                        <TableHead className="px-4 py-3 text-left text-sm font-semibold text-gray-700">SKU</TableHead>
                        <TableHead className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</TableHead>
                        <TableHead className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Image</TableHead>
                        <TableHead className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Price</TableHead>
                        <TableHead className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</TableHead>
                        <TableHead className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Description</TableHead>
                        <TableHead className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.meta?.data?.map((res: any, i: number) => (
                        <TableRow key={res.kfa_code} className="border-t hover:bg-gray-50">
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.kfa_code}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.display_name}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.image}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.fix_price}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res?.kategori?.name}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.description ? res.description : '-'}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700 flex justify-start space-x-3">
                                <button
                                    className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm transition"
                                    onClick={() => alert('View details for ' + res.display_name)}
                                    aria-label={`View details for ${res.display_name}`}
                                >
                                    Detail
                                </button>
                                <button
                                    className="px-3 py-1 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md shadow-sm transition"
                                    onClick={() => alert('Edit ' + res.display_name)}
                                    aria-label={`Edit ${res.display_name}`}
                                >
                                    Edit
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Products;
