import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useUpdateUser } from "./updateUserHooks";
import { useSession } from "./authHooks";

export default function UserDataForm() {
  const { user } = useSession();
  const { updateUser, isUpdating } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName: user.fullName || "",
      phoneNumber: user.phoneNumber || "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    updateUser(data);
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Update Profile Information
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name and Phone fields side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              placeholder="Enter your full name"
              disabled={isUpdating}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid phone number (10-15 digits)",
                },
              })}
              placeholder="Enter your phone number"
              disabled={isUpdating}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.phoneNumber
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-primary"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isUpdating}
            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isUpdating ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                Updating...
              </>
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
