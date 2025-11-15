import { useEffect, useTransition } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

function Filter({ fieldValue, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!searchParams.get(fieldValue)) {
      searchParams.set(fieldValue, options.at(0).value);
      setSearchParams(searchParams);
    }
  }, [fieldValue, options, searchParams, setSearchParams]);

  function handleClick(value) {
    startTransition(() => {
      searchParams.set(fieldValue, value);
      if (searchParams.get("page")) searchParams.set("page", 1);
      setSearchParams(searchParams);
    });
  }

  const currentFilter = searchParams.get(fieldValue);

  return (
    <div className="border border-gray-200 bg-white rounded-lg p-1 flex gap-1 shadow-sm relative">
      {isPending && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] rounded-lg flex items-center justify-center z-10">
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
        </div>
      )}
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={isPending}
          className={`
            px-3 py-2 rounded-md font-medium text-sm transition-all duration-300
            ${
              option.value === currentFilter
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-gray-700 hover:bg-primary hover:text-white"
            }
            disabled:cursor-wait
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
