import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* STICKY SIDEBAR */}
      <div className="sticky top-0 h-screen">

        <AdminSidebar />

      </div>

      {/* PAGE CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}