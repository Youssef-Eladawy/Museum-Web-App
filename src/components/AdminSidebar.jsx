import { NavLink } from "react-router-dom";
import {
  FaCalendarAlt,
  FaSignOutAlt,
  FaUsers,
  FaMapMarkedAlt,
  FaUserShield,
} from "react-icons/fa";
import { useLogout, useSession } from "../featuers/auth/authHooks";
import { Loader2 } from "lucide-react";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const { user } = useSession();
  const { logout, isPending } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <>
      {/* Sidebar - Desktop and Mobile */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:sticky top-0 left-0 h-screen w-64 lg:w-80 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out z-30 lg:z-auto`}
      >
        {/* Logo/Header */}
        <div className="px-8 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-primary">Admin Dashboard</h2>
          <p className="text-xs text-gray-500 mt-1">Management Portal</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="tours"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <FaMapMarkedAlt className="text-lg" />
                <span className="font-medium">Manage Tours</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="bookings"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <FaCalendarAlt className="text-lg" />
                <span className="font-medium">Manage Bookings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="users"
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <FaUsers className="text-lg" />
                <span className="font-medium">Manage Users</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FaUserShield className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">
                {user?.fullName || "Admin"}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.email || "admin@example.com"}
              </p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-semibold rounded uppercase">
                Administrator
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            disabled={isPending}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="text-lg animate-spin" />
                <span>Logging out...</span>
              </>
            ) : (
              <>
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
        ></div>
      )}
    </>
  );
}
