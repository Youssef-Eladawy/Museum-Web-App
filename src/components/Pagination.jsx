import { useTransition } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { RES_PER_PAGE } from "../../constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentPage = searchParams.get("page") ? +searchParams.get("page") : 1;
  const pageCount = Math.ceil(count / RES_PER_PAGE);

  function nextPage() {
    startTransition(() => {
      const next = currentPage + 1;
      searchParams.set("page", next);
      setSearchParams(searchParams);
    });
  }

  function prevPage() {
    startTransition(() => {
      const prev = currentPage - 1;
      searchParams.set("page", prev);
      setSearchParams(searchParams);
    });
  }

  if (pageCount <= 1) return null;

  return (
    <div className="w-full flex items-center justify-between py-4">
      <p className="text-sm text-gray-700">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * RES_PER_PAGE + 1}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {Math.min(currentPage * RES_PER_PAGE, count)}
        </span>{" "}
        of <span className="font-semibold">{count}</span> results
      </p>

      <div className="flex gap-2 relative">
        {isPending && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <Loader2 className="w-5 h-5 animate-spin text-primary" />
          </div>
        )}

        {currentPage !== 1 && (
          <button
            onClick={prevPage}
            disabled={isPending}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md disabled:cursor-wait disabled:opacity-60"
          >
            <HiChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
        )}

        {currentPage !== pageCount && (
          <button
            onClick={nextPage}
            disabled={isPending}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md disabled:cursor-wait disabled:opacity-60"
          >
            <span>Next</span>
            <HiChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
