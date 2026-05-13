"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminSidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");

    router.push("/");
  };

  return (
    <div className="w-70 h-screen bg-black text-white p-5 flex flex-col">

      {/* TOP */}
      <div>
        <h1 className="text-3xl font-bold mb-10">
          Admin Panel
        </h1>

        <div className="flex flex-col gap-7 text-xl">
          <Link href="/admin">Add Category</Link>

          <Link href="/admin/products">Add Product</Link>

          <Link href="/admin/allproducts">
            All Products
          </Link>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 transition-all p-3 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}