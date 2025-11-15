import { useEffect, useTransition } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const value = searchParams.get("sortBy") || options[0]?.value;

  useEffect(() => {
    if (!searchParams.get("sortBy")) {
      searchParams.set("sortBy", options[0]?.value || "date-asc");
      setSearchParams(searchParams);
    }
  }, [options, searchParams, setSearchParams]);

  function handleChange(e) {
    startTransition(() => {
      searchParams.set("sortBy", e.target.value);
      setSearchParams(searchParams);
    });
  }

  return (
    <div className="relative">
      {isPending && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-10">
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
        </div>
      )}
      <select
        value={value}
        onChange={handleChange}
        disabled={isPending}
        className={`px-4 py-2 ${
          isPending ? "pr-10" : ""
        } border border-gray-200 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all cursor-pointer hover:border-gray-300 disabled:cursor-wait appearance-none`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;
