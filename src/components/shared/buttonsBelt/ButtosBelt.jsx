// import "./ButtonsBelt.css";

// function ButtonsBelt({ buttons, editClasses,tagsDataSet }) {
//     function show(e) {
//         let tags = document.querySelectorAll(editClasses);
//         let lastActive = document.querySelector(`button.active`);

//         lastActive.classList.remove("active");
//         e.target.classList.add("active");

//         if (e.target.dataset.attr === "all") {
//             for (const tag of tags) {
//                 tag.classList.add("d-block");
//                 tag.classList.remove("d-none");
//             }
//             return;
//         }

//         for (const tag of tags) {
//             if (tag.dataset[tagsDataSet] !== e.target.dataset.attr) {
//                 tag.classList.add("d-none");
//                 tag.classList.remove("d-block");
//             } else {
//                 tag.classList.add("d-block");
//                 tag.classList.remove("d-none");
//             }
//         }
//     }

//     return (
//         <>
//             <div className="belt d-flex justify-content-evenly flex-wrap gap-4 mb-4">
//                 {buttons.map((button, index) => (
//                     <button
//                         key={index}
//                         onClick={show}
//                         data-attr={button.attr}
//                         className={
//                             index == 0
//                                 ? "rounded-pill p-2 active"
//                                 : "rounded-pill p-2"
//                         }>
//                         {button.content}
//                     </button>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default ButtonsBelt;


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
          className={`w-36 rounded-full px-4 py-2 border border-main transition-colors duration-200
            ${
              activeIndex === index
                ? "bg-main text-white"
                : "bg-transparent text-main"
            }`}
        >
          {button.content}
        </button>
      ))}
    </div>
  );
}

export default ButtonsBelt;
