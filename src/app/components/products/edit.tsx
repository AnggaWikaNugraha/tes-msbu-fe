import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Dialog from '@radix-ui/react-dialog';

const Editproduct = ({
    openEdit,
    setOpenEdit,
    handleEditSubmit,
    selectedProduct,
}: any) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            kfa_code: '',
            display_name: '',
            fix_price: '',
            description: '',
            kategori: '',
        },
    });

    // Reset form values whenever selectedProduct changes
    useEffect(() => {
        if (selectedProduct) {
            reset({
                kfa_code: selectedProduct.kfa_code,
                display_name: selectedProduct.display_name,
                fix_price: selectedProduct.fix_price,
                description: selectedProduct.description,
                kategori: selectedProduct.kategori?.name,
            });
        }
    }, [selectedProduct, reset]);

    return (
        <>
            {selectedProduct && (
                <Dialog.Root open={openEdit} onOpenChange={setOpenEdit}>
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-xl w-[80%] max-w-3xl">
                        <Dialog.Title className="text-2xl font-semibold text-gray-800">Edit Product</Dialog.Title>
                        <form onSubmit={handleSubmit(handleEditSubmit)} className="mt-4 space-y-4">
                            {/* SKU */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">SKU</label>
                                <input
                                    {...register('kfa_code', { required: 'SKU is required' })}
                                    className={`w-full p-2 border ${errors.kfa_code ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                                    disabled
                                />
                                {errors.kfa_code && (
                                    <span className="text-red-500 text-sm">{errors.kfa_code.message}</span>
                                )}
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    {...register('display_name', {
                                        required: 'Name is required',
                                        minLength: { value: 3, message: 'Name must be at least 3 characters' },
                                    })}
                                    className={`w-full p-2 border ${errors.display_name ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                                />
                                {errors.display_name && (
                                    <span className="text-red-500 text-sm">{errors.display_name.message}</span>
                                )}
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Price</label>
                                <input
                                    {...register('fix_price', {
                                        required: 'Price is required',
                                        valueAsNumber: true,
                                        min: { value: 1, message: 'Price must be greater than 0' },
                                    })}
                                    type="number"
                                    className={`w-full p-2 border ${errors.fix_price ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                                />
                                {errors.fix_price && (
                                    <span className="text-red-500 text-sm">{errors.fix_price.message}</span>
                                )}
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Description</label>
                                <textarea
                                    {...register('description', {
                                        required: 'Description is required',
                                        minLength: { value: 10, message: 'Description must be at least 10 characters' },
                                    })}
                                    className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                                />
                                {errors.description && (
                                    <span className="text-red-500 text-sm">{errors.description.message}</span>
                                )}
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Category</label>
                                <input
                                    {...register('kategori', { required: 'Category is required' })}
                                    className={`w-full p-2 border ${errors.kategori ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                                />
                                {errors.kategori && (
                                    <span className="text-red-500 text-sm">{errors.kategori.message}</span>
                                )}
                            </div>

                            {/* Buttons */}
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
        </>
    );
};

export default Editproduct;
