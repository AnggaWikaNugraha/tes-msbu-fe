// Fungsi untuk menangani submit form
export const onSubmitEdit = async (data: any, setOpenEdit: any, setmodal: any) => {
    try {
        const response = await fetch('/api/product-edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to update product');

        const result = await response.json();
        console.log(result.message, result.product);

        setOpenEdit(false); // Tutup modal setelah sukses

        setmodal({
            isModal: true,
            title: "Success",
            title_sub: "Berhasil Edit",
        });

    } catch (error) {
        console.error(error);
    }
};

// Fungsi untuk menangani submit form Add Product
export const onAddSubmit = async (data: any, setOpenAdd: any, setmodal: any) => {
    try {
        const response = await fetch('/api/product-add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to add product');

        const result = await response.json();
        console.log(result.message, result.product);

        setOpenAdd(false); // Tutup modal setelah sukses

        setmodal({
            isModal: true,
            title: "Success",
            title_sub: "Berhasil Add",
        });
    } catch (error) {
        console.error(error);
    }
};