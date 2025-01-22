import axios from 'axios';
import apiClients from '../auth/lib/interceptors';

export const onSubmitEdit = async (data: any, setOpenEdit: any, setmodal: any) => {
    try {
        const response = await apiClients.kemkesLokal.post('/api/product-edit', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response.data.message, response.data.product);

        setOpenEdit(false); // Tutup modal setelah sukses
        setmodal({
            isModal: true,
            title: "Success",
            title_sub: "Berhasil Edit",
        });
    } catch (error) {
        console.error(error);
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
        }
    }
};

export const onAddSubmit = async (data: any, setOpenAdd: any, setmodal: any) => {
    try {
        const response = await apiClients.kemkesLokal.post('/api/product-add', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response.data.message, response.data.product);

        setOpenAdd(false); // Tutup modal setelah sukses
        setmodal({
            isModal: true,
            title: "Success",
            title_sub: "Berhasil Add",
        });
    } catch (error) {
        console.error(error);
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
        }
    }
};
