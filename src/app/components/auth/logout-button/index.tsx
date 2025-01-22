import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // Sign out the user using next-auth
    await signOut({
      redirect: false, // Don't redirect automatically, we'll handle it manually
    });

    // Redirect user to login page after logout
    router.push("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
