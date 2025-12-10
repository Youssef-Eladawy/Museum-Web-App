// src/ui/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useSession } from "./src/featuers/auth/authHooks";
import Spinner from "./src/components/Spinner";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useSession();
  const location = useLocation();

  if (isLoading) return <Spinner />;
  if (!user) {
    const callback = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/login?callback=${callback}`} replace />;
  }

  return children;
}
