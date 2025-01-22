import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import apiClient from "@/app/components/auth/lib/interceptors";
import qs from "qs";
import axios from "axios";

export const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID || '',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
        CredentialsProvider({
            credentials: {
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                try {
                    const response = await apiClient.auth.post("/api/login", {
                        name: credentials.name,
                        email: credentials.email,
                        password: credentials.password,
                    });

                    // Validasi respons: pastikan tidak ada error\
                    if (response?.data?.meta?.status_code === 200) {

                        const { access_token, refresh_token } = response.data.data;

                        return {
                            id: access_token,
                            accessToken: access_token,
                            refreshToken: refresh_token,
                            user: {
                                name: credentials.name,
                                email: credentials.email,
                            },
                        };
                    } else {
                        throw new Error(response?.data?.meta?.message || "Gagal login. Periksa kredensial Anda.");
                    }

                } catch (error: any) {
                    throw new Error(
                        error.response?.data?.meta?.message || "Terjadi kesalahan pada server. Silakan coba lagi."
                    );
                }
            }

        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login", // Ubah sesuai kebutuhan
    },
    callbacks: {
        async jwt({ token, user, account }: { token: any, user: any, account: any }) {
            // Pastikan properti user.accessToken dan user.refreshToken adalah string atau undefined
            if (user) {

                const data = new URLSearchParams();
                data.append("client_id", process.env.KEMKES_CLIENT_ID || '');
                data.append("client_secret", process.env.KEMKES_CLIENT_SECRET || '');

                const response = await apiClient.kemkes.post("/accesstoken?grant_type=client_credentials",
                    data.toString(),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );

                if (account?.provider === "credentials") {

                    token.accessToken = response.data.access_token; // Casting ke tipe yang sesuai
                    token.refreshToken = response.data.access_token; // Casting ke tipe yang sesuai
                    token.user = user?.user || undefined;
                } else if (account?.provider === "google") {

                    token.accessToken = response.data.access_token; // Casting ke tipe yang sesuai
                    token.refreshToken = response.data.access_token; // Casting ke tipe yang sesuai
                    token.user = user;
                } else if (account?.provider === "facebook") {

                    token.accessToken = response.data.access_token; // Casting ke tipe yang sesuai
                    token.refreshToken = response.data.access_token; // Casting ke tipe yang sesuai
                    token.user = user;
                }

            }
            return token;
        },
        async session({ session, token }: { session: any, token: any }) {
            // Casting tipe token.accessToken dan token.refreshToken
            session.accessToken = token.accessToken as string | undefined; // Casting ke tipe yang sesuai
            session.refreshToken = token.refreshToken as string | undefined; // Casting ke tipe yang sesuai
            session.user = token.user; // Add user data to the session
            return session;
        },
    },

});

// Ekspor metode HTTP
export const GET = handler;
export const POST = handler;
