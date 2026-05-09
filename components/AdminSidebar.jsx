"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-70 h-screen bg-black text-white p-5">
      <h1 className="text-3xl font-bold mb-10">Admin Panel</h1>

      <div className="flex flex-col gap-7 text-xl">
        <Link href="/admin">Add Category</Link>

        <Link href="/admin/products">Add Product</Link>

          <Link href="/admin/allproducts">All Products</Link>
      </div>
    </div>
  );
}