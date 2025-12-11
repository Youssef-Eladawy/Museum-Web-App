
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RES_PER_PAGE } from "../../../constants";

export default function Pagination({ page, setPage, totalCount }) {
  const totalPages = Math.max(1, Math.ceil((totalCount || 0) / RES_PER_PAGE));

  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="px-3 py-1 border rounded-md hover:bg-gray-100"
          disabled={page === 1}
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1">
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded-md ${
                p === page ? "bg-blue-600 text-white" : "bg-white border"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          className="px-3 py-1 border rounded-md hover:bg-gray-100"
          disabled={page === totalPages}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </div>
    </div>
  );
}
