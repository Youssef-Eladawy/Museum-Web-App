// src/ui/AdminRoute.jsx (new file)
import { Navigate, useLocation } from "react-router-dom";
import { useSession } from "./src/featuers/auth/authHooks";
import Spinner from "./src/components/Spinner";

export default function AdminRoute({ children }) {
  const { user, isLoading } = useSession();
  const location = useLocation();

  if (isLoading) return <Spinner />;

  // Check authentication
  if (!user) {
    const callback = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?callback=${callback}`} replace />;
  }

  // Check admin role
  if (user.role !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
