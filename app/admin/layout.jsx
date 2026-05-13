"use client";

import AdminSidebar from "@/components/AdminSidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  return (
    <div className="flex min-h-screen bg-black-50">

      {/* HIDE SIDEBAR ON LOGIN PAGE */}
      {!isLoginPage && (
        <div className="sticky top-0 h-screen">
          <AdminSidebar />
        </div>
      )}

      {/* PAGE CONTENT */}
      <div className="flex-1  overflow-y-auto">
        {children}
      </div>

    </div>
  );
}