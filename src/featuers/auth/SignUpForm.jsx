import { useForm } from "react-hook-form";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useSignup } from "./authHooks";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signUp, isPending } = useSignup();

  function onSubmit(data) {
    const { fullName, phoneNumber, email, password, confirmPassword } = data;
    if (password !== confirmPassword) return;
    signUp({ fullName, phoneNumber, email, password });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-light">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-primary text-center mb-6">
          Create Your Account ✨
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            disabled={isPending}
            {...register("fullName", { required: "Full name is required" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            disabled={isPending}
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            disabled={isPending}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              disabled={isPending}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none pr-10"
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
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-medium mb-2"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              disabled={isPending}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-primary focus:outline-none"
              tabIndex={-1}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex justify-center items-center gap-2"
        >
          {isPending ? (
            <Loader2 className="animate-spin w-5 h-5" />
          ) : (
            "Create Account"
          )}
        </button>

        {/* Extra */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
