import apiClients from '@/app/components/auth/lib/interceptors';

export const fetchProducts = async (token: string) => {
    try {
        const response = await apiClients.kemkesLokal.post('/api/product', {
            headers: {
                Authorization: `Bearer ${token}`, // Menambahkan token pada header
                Accept: 'application/json', // Menambahkan header Accept
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Failed to fetch products'); // Lemparkan error untuk ditangani di komponen
    }
};