'use client'

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { fetchProducts } from '@/lib/api/products';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FaEye, FaEdit } from 'react-icons/fa'; // Import ikon dari react-icons
import * as Dialog from '@radix-ui/react-dialog'; // Import Dialog dari Radix UI
import { useForm } from 'react-hook-form'; // Import React Hook Form

const Products = () => {
    const { data: session } = useSession(); // Mengambil session
    const token = session?.accessToken; // Ambil token dari session
    const [openDetail, setOpenDetail] = useState(false); // State untuk kontrol modal detail
    const [openEdit, setOpenEdit] = useState(false); // State untuk kontrol modal edit
    const [selectedProduct, setSelectedProduct] = useState<any>(null); // Untuk menyimpan produk yang dipilih

    // Gunakan useForm hook secara terpisah dari logika modal
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            kfa_code: selectedProduct?.kfa_code,
            display_name: selectedProduct?.display_name,
            fix_price: selectedProduct?.fix_price,
            description: selectedProduct?.description,
            kategori: selectedProduct?.kategori?.name,
        },
    });

    // Menggunakan useQuery untuk mengambil data produk
    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetchProducts(token!),
        enabled: !!token, // Pastikan query hanya dijalankan jika token ada
    });

    // Debugging error dan loading status
    if (isLoading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
        </div>
    );
    if (error) return <div className="text-center text-red-500">Error loading products: {error.message}</div>;

    // Fungsi untuk membuka modal dan mengatur produk yang dipilih
    const openDetailModal = (product: any) => {
        setSelectedProduct(product);
        setOpenDetail(true);
    };

    // Fungsi untuk membuka modal edit
    const openEditModal = (product: any) => {
        setSelectedProduct(product);
        setOpenEdit(true);
        reset(product); // Reset form with the selected product data when opening the edit modal
    };

    // Fungsi untuk menangani submit form
    const onSubmit = (data: any) => {
        console.log('Updated Product Data:', data);
        // Tambahkan logika untuk menyimpan data yang diubah, seperti API call
        setOpenEdit(false); // Tutup modal edit setelah submit
    };

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
                    {data?.meta?.data?.map((res: any) => (
                        <TableRow key={res.kfa_code} className="border-t hover:bg-gray-50">
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.kfa_code}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.display_name}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.image}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.fix_price}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res?.kategori?.name}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700">{res.description ? res.description : '-'}</TableCell>
                            <TableCell className="px-4 py-3 text-sm text-gray-700 flex justify-start space-x-3">
                                {/* Tombol Detail */}
                                <button
                                    className="px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-md shadow-sm transition"
                                    onClick={() => openDetailModal(res)} // Membuka modal detail
                                    aria-label={`View details for ${res.display_name}`}
                                >
                                    <FaEye className="inline-block mr-1" /> {/* Ikon Detail */}
                                </button>
                                {/* Tombol Edit */}
                                <button
                                    className="px-3 py-1 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md shadow-sm transition"
                                    onClick={() => openEditModal(res)} // Membuka modal edit
                                    aria-label={`Edit ${res.display_name}`}
                                >
                                    <FaEdit className="inline-block mr-1" /> {/* Ikon Edit */}
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Modal Detail */}
            {selectedProduct && (
                <Dialog.Root open={openDetail} onOpenChange={setOpenDetail}>
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl w-[80%] max-w-3xl">
                        <Dialog.Title className="text-2xl font-semibold text-gray-800">{selectedProduct.display_name}</Dialog.Title>
                        <Dialog.Description className="mt-2 text-lg text-gray-600">{selectedProduct.description}</Dialog.Description>
                        <div className="mt-4 text-gray-600">
                            <p><strong>SKU:</strong> {selectedProduct.kfa_code}</p>
                            <p><strong>Price:</strong> {selectedProduct.fix_price}</p>
                            <p><strong>Category:</strong> {selectedProduct?.kategori?.name}</p>
                        </div>
                        <div className="mt-6 flex justify-end space-x-3">
                            <Dialog.Close asChild>
                                <button className="px-6 py-3 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition">
                                    Close
                                </button>
                            </Dialog.Close>
                        </div>
                    </Dialog.Content>
                </Dialog.Root>
            )}

            {/* Modal Edit */}
            {selectedProduct && (
                <Dialog.Root open={openEdit} onOpenChange={setOpenEdit}>
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl w-[80%] max-w-3xl">
                        <Dialog.Title className="text-2xl font-semibold text-gray-800">Edit Product</Dialog.Title>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">SKU</label>
                                <input
                                    {...register('kfa_code')}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    disabled
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    {...register('display_name')}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Price</label>
                                <input
                                    {...register('fix_price')}
                                    type="number"
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Description</label>
                                <textarea
                                    {...register('description')}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Category</label>
                                <input
                                    {...register('kategori')}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>

                            <div className="mt-6 flex justify-end space-x-3">
                                <Dialog.Close asChild>
                                    <button className="px-6 py-3 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </Dialog.Content>
                </Dialog.Root>
            )}
        </div>
    );
};

export default Products;
