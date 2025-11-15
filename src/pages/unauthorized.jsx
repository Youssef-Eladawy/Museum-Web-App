import { useNavigate } from "react-router-dom";
import { ShieldX } from "lucide-react";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center max-w-md px-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <ShieldX size={48} className="text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Access Denied
        </h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page. Please contact an administrator if you believe this is an error.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
