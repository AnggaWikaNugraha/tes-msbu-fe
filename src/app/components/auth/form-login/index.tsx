"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TextInput, PasswordInput } from "../Input";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";

export function LoginForm({ setmodal }: { setmodal: any }) {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // State untuk pesan error
    const [isLoading, setIsLoading] = useState<boolean>(false); // State untuk loading

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    // Mengambil value terkini dari field menggunakan watch
    const name = watch("name");
    const email = watch("email");
    const password = watch("password");

    const onSubmit = async (data: { email: string; password: string, name: string }) => {
        setIsLoading(true); // Set loading state ke true

        // next-auht
        try {
            // Using next-auth signIn function to authenticate the user
            const response = await signIn("credentials", {
                name: data.name,
                email: data.email,
                password: data.password,
                redirect: false, // Don't automatically redirect
            });
            if (response?.ok) {
                // If login is successful, you can use the session information from next-auth
                setmodal({
                    isModal: true,
                    title: "Success",
                    title_sub: "Berhasil login",
                });
        
                setErrorMessage(null); // Reset error if login is successful
                setTimeout(() => {
                    router.push("/"); // Redirect to the landing page
                }, 2000);
            } else {
                setErrorMessage(response?.error || "Login gagal. Periksa kredensial Anda.");
            }
        } catch (error: any) {
            // Catch any error during the signIn process
            setErrorMessage("Terjadi kesalahan. Silakan coba lagi.");

        } finally {
            setTimeout(() => {
                setIsLoading(false); // Set loading state to false once done
                setErrorMessage(null); // Reset error if login is successful
            }, 2000);
        }

    };

    const CallbackClassButton = useCallback(
        (email: any, password: any, name: any, errorsState: any) => {
            if (!name || errorsState?.name?.message) {
                return "opacity-[.40]";
            } else if (!email || errorsState?.email?.message) {
                return "opacity-[.40]";
            } else if (!password || errorsState?.password?.message) {
                return "opacity-[.40]";
            }
            return "";
        },
        []
    );

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
        >
            <TextInput
                value={name}
                label="Name"
                id="name"
                type="text"
                placeholder="Masukkan Name"
                {...register("name", {
                    required: "Name wajib diisi",
                })}
                error={errors.name?.message}
            />

            <TextInput
                value={email}
                label="Email"
                id="email"
                type="text"
                placeholder="Masukkan email"
                {...register("email", {
                    required: "Email wajib diisi",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Format email tidak valid",
                    },
                })}
                error={errors.email?.message}
            />

            <PasswordInput
                value={password}
                label="Kata Sandi"
                id="password"
                placeholder="Masukkan kata sandi"
                linkText="Lupa kata sandi?"
                onLinkClick={() => router.push("/auth/forgot-password")}
                {...register("password", {
                    required: "password wajib diisi",
                })}
                error={errors?.password?.message}
            />

            <Button
                disabled={isLoading}
                type="submit"
                className={`w-full h-12 mt-4 rounded-[10px] bg-[#652F8E] ${CallbackClassButton(
                    email,
                    password,
                    name,
                    errors,
                )}`}
            >
                <div className="text-white text-[16px] leading-[24px] font-semibold">
                    {isLoading ? "Loading..." : "Masuk"}
                </div>
            </Button>

            {errorMessage && (
                <div className="text-red-500 text-sm mt-4 text-center">
                    {errorMessage}
                </div>
            )}
        </form>
    );
}
