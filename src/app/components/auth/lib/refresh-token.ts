import axios from "axios";
import { signOut, getSession } from "next-auth/react";

const refreshToken = async () => {
  try {
    const session = await getSession();
    if (!session?.refreshToken) {
      throw new Error("No refresh token available");
    }

    // Lakukan refresh token dengan axios
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/refresh`,
      {
        refresh_token: session.refreshToken, // Sesuaikan dengan nama key API Anda
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Pastikan response sesuai dengan format API
    const { accessToken } = response.data;
    if (!accessToken) {
      throw new Error("Failed to retrieve access token");
    }

    return accessToken; // Return token baru
  } catch (err) {
    console.error("Error refreshing token:", err);

    // Jika refresh token gagal, lakukan sign out
    await signOut({
      callbackUrl: "/auth/login", // Redirect ke halaman login setelah logout
    });

    return null; // Tidak ada token baru
  }
};

export default refreshToken;
