import { useState } from "react";
import { useLogin } from "./authHooks";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("ehaba0523@gmail.com");
  const [password, setPassword] = useState("Ahmed@12345");
  const [showPassword, setShowPassword] = useState(false);

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-light">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-primary text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Email Field */}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Enter your email"
            disabled={isPending}
          />
        </div>

        {/* Password  */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all pr-10"
              placeholder="Enter your password"
              disabled={isPending}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-primary focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex justify-center items-center gap-2"
        >
          {isPending ? <Loader2 className="animate-spin w-5 h-5" /> : "Login"}
        </button>

        {/* Extra */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
