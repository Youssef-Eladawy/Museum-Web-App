import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession } from "../featuers/auth/authHooks";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useSession();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <h2 className="text-xl font-bold text-primary">Admin Dashboard</h2>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-600 hover:text-primary transition"
        >
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar Component */}
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Desktop Header */}
          <header className="hidden lg:flex bg-white border-b border-gray-200 px-8 py-4 items-center justify-between sticky top-0 z-10">
            <h1 className="text-xl font-semibold text-gray-800">
              Welcome Back, {user?.fullName || "Admin"}
            </h1>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase">
              Admin
            </span>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 p-4 sm:p-6 lg:p-16 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
