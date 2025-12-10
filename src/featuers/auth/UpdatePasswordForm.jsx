import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useUpdatePassword } from "./updateUserHooks";

export default function PasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { updatePassword, isUpdatingPassword } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const password = watch("password");

  function onSubmit(data) {
    updatePassword(data.password, {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Update Password
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Password fields side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* New Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Please enter a new password",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                placeholder="Enter new password"
                disabled={isUpdatingPassword}
                className={`w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 transition-all ${
                  errors.password
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:ring-primary"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-primary"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                id="confirm"
                {...register("confirm", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                placeholder="Confirm new password"
                disabled={isUpdatingPassword}
                className={`w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 transition-all ${
                  errors.confirm
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:ring-primary"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-primary"
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirm && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirm.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isUpdatingPassword}
            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isUpdatingPassword ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                Updating...
              </>
            ) : (
              "Update Password"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
