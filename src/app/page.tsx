import Image from "next/image";
import Profile from "./components/auth/user";
import Products from "./components/products";

export default function Home() {
  return (
    <div className="min-h-screen p-9">
      <Profile/>
      <Products/>
    </div>
  );
}
