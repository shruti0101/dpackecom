"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProductForm from "@/components/ProductForm";

export default function ProductPage() {
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("adminAuth");

    if (isAdmin === "true") {
      setAuthorized(true);
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <ProductForm />;
}