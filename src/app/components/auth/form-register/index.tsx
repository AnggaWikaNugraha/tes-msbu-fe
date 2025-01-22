"use client";


import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TextInput, PasswordInput } from "../Input";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import apiClient from "../lib/interceptors";

export function RegisterForm({ setmodal }: { setmodal: any }) {

    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<any | null>(null); // State untuk pesan error
    const [isLoading, setIsLoading] = useState<boolean>(false); // State untuk loading
    const [isLoadingTitle, setisLoadingTitle] = useState('')

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            phone_number: '',
        },
    });

    const name = watch('name');
    const email = watch('email');
    const password = watch('password');
    const phone_number = watch('phone_number');

    const onSubmit = async (data: {
        name: string,
        email: string;
        password: string;
        phone_number: string,
    }) => {

        setIsLoading(true); // Set loading state ke true
        setisLoadingTitle('Loading register ..')

        try {
            // Pastikan nomor WhatsApp selalu berawalan +62
            if (data.phone_number.startsWith('0')) {
                data.phone_number = '+62' + data.phone_number.slice(1);
            } else if (data.phone_number.startsWith('62')) {
                data.phone_number = '+' + data.phone_number;
            } else if (!data.phone_number.startsWith('+62')) {
                data.phone_number = '+62' + data.phone_number;
            }

            // Kirim data ke API menggunakan apiClient
            const response = await apiClient.auth.post("/api/register", data);

            if (response?.data?.meta?.status_code === 200) {

                setmodal({
                    isModal: true,
                    title: "Success",
                    title_sub: "Berhasil Register",
                });

                try {
                    setisLoadingTitle('Loading login ..')
                    // Using next-auth signIn function to authenticate the user
                    const response = await signIn("credentials", {
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        redirect: false, // Don't automatically redirect
                    });
                    
                    if (response?.ok) {
                        // If login is successful, you can use the session information from next-auth
                        setErrorMessage(null); // Reset error if login is successful
                        setTimeout(() => {
                            router.push("/"); // Redirect to the landing page
                        }, 2000);
                    } else {
                        setErrorMessage(response?.error || "gagal login. Periksa kredensial Anda.");
                    }
                } catch (error: any) {
                    // Catch any error during the signIn process
                    setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");
        
                } finally {
                    setTimeout(() => {
                        setisLoadingTitle('')
                        setIsLoading(false); // Set loading state to false once done
                        setErrorMessage(null); // Reset error if login is successful
                    }, 2000);
                }

            } else {

                setmodal({
                    isModal: true,
                    title: 'Error',
                    title_sub: 'Gagal Register'
                })

            }
        } catch (error: any) {

            // Tangkap pesan error
            if (error.response && error.response.data.meta) {
                setErrorMessage(error.response.data.meta.message); // Set pesan error dari API
            } else {
                setErrorMessage(['Terjadi kesalahan. Silakan coba lagi.']);
            }
        } finally {
            setTimeout(() => {
                setisLoadingTitle('')
                setIsLoading(false); // Set loading state to false once done
                setErrorMessage(null); // Reset error if login is successful
            }, 2000);
        }
    };

    const CallbackClassButton = useCallback((
        name: any,
        email: any,
        password: any,
        phone_number: any,
        errorsState: any,
    ) => {
        if (!name || errorsState?.name?.message) {
            return 'opacity-[.40]';
        } else if (!email || errorsState?.email?.message) {
            return 'opacity-[.40]';
        } else if (!password || errorsState?.password?.message) {
            return 'opacity-[.40]';
        } else if (!phone_number || errorsState?.phone_number?.message) {
            return 'opacity-[.40]';
        }
        return '';
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
            <TextInput
                value={name}
                label="Nama Lengkap"
                id="name"
                type="text"
                placeholder="Masukkan nama lengkap"
                {...register('name', { required: 'Nama wajib diisi' })}
                error={errors.name?.message}
            />

            <TextInput
                value={email}
                label="Email"
                id="email"
                type="text"
                placeholder="Masukkan email"
                {...register('email', {
                    required: 'Email wajib diisi',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Format email tidak valid',
                    },
                })}
                error={errors.email?.message}
            />

            <PasswordInput
                value={password}
                label="Kata Sandi"
                id="password"
                placeholder="Masukkan kata sandi"
                {...register('password', { required: 'password wajib diisi' })}
                error={errors?.password?.message}
            />

            <TextInput
                label="Nomor WhatsApp"
                id="whatsapp"
                placeholder="Masukkan nomor WhatsApp"
                prefix="+62"
                value={phone_number}
                type="text"
                {...register("phone_number", {
                    required: "Nomor WhatsApp wajib diisi",
                    pattern: {
                        value: /^(\+62|62|0|8)\d+$/,
                        message: "Nomor hanya boleh dimulai dengan +61, 62, 8, atau 0 dan harus berupa angka.",
                    },
                    minLength: {
                        value: 9,
                        message: "Nomor WhatsApp harus memiliki minimal 9 digit",
                    },
                })}
                error={errors.phone_number?.message}
            />

            <Button
                disabled={isLoading}
                type="submit"
                className={`w-full h-12 mt-4 rounded-[10px] bg-[#652F8E] ${CallbackClassButton(name, email, password, phone_number, errors)}`}
            >
                <div className="text-white text-[16px] leading-[24px] font-semibold">
                    {isLoading ? isLoadingTitle : "Daftar"} {/* Ubah teks berdasarkan status loading */}
                </div>
            </Button>

            {errorMessage && Array.isArray(errorMessage) && (
                <div className="text-red-500 text-sm mt-4 text-center space-y-1">
                    {errorMessage.map((message, index) => (
                        <div key={index}>{message}</div>
                    ))}
                </div>
            )}

        </form>
    );
}
