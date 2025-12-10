import { useState } from "react";

function ButtonsBelt({ buttons, editClasses, tagsDataSet }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function show(e, index) {
    setActiveIndex(index);

    const tags = document.querySelectorAll(editClasses);

    if (e.target.dataset.attr === "all") {
      for (const tag of tags) {
        tag.classList.remove("hidden");
        tag.classList.add("block");
      }
      return;
    }

    for (const tag of tags) {
      if (tag.dataset[tagsDataSet] !== e.target.dataset.attr) {
        tag.classList.add("hidden");
        tag.classList.remove("block");
      } else {
        tag.classList.add("block");
        tag.classList.remove("hidden");
      }
    }
  }

  return (
    <div className="flex flex-wrap justify-evenly gap-4 mb-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          data-attr={button.attr}
          onClick={(e) => show(e, index)}
          className={`w-36 rounded-full px-4 py-2 border border-primary transition-colors duration-200
            ${
              activeIndex === index
                ? "bg-primary text-white"
                : "bg-transparent text-primary"
            }`}
        >
          {button.content}
        </button>
      ))}
    </div>
  );
}

export default ButtonsBelt;
