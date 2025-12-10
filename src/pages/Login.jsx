import { Navigate, useLocation } from "react-router-dom";
import { useSession } from "../featuers/auth/authHooks";
import LoginForm from "../featuers/auth/loginForm";

function Login() {
  const { user, isLoading } = useSession();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const callback = searchParams.get("callback");

  // If already logged in, redirect to callback or home
  if (!isLoading && user) {
    const destination = callback ? decodeURIComponent(callback) : "/";
    return <Navigate to={destination} replace />;
  }

  return <LoginForm />;
}

export default Login;
