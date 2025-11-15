// import "./sectionTitle.css";
// function SectionTitle({title,sentence,desc}) {
//     return (
//         <>
//             <div className="sectionTitle py-5 d-flex align-items-center justify-content-center flex-column">
//                 {
//                     title &&
//                     <div className="title-title fs-4 fw-bold">{title}</div>
//                 }
//                 {
//                     sentence &&
//                     <div className="word fs-1 fw-bold">{sentence}</div>
//                 }
//                 {
//                     desc &&
//                     <div className="desc w-75 text-secondary text-center mt-3">{desc}</div>
//                 }
//             </div>
//         </>
//     );
// }

// export default SectionTitle;

function SectionTitle({ title, sentence, desc }) {
    return (
        <div className="py-12 flex flex-col items-center justify-center text-center">
            {title && (
                <div
                    className="
            relative text-xl font-bold text-main
            before:content-[''] before:absolute before:top-1/2 before:-left-16 before:-translate-y-1/2
            before:h-[2px] before:w-12 before:bg-main
            after:content-[''] after:absolute after:top-1/2 after:-right-16 after:-translate-y-1/2
            after:h-[2px] after:w-12 after:bg-main
          ">
                    {title}
                </div>
            )}

            {sentence && (
                <div className="text-4xl font-bold mt-3">{sentence}</div>
            )}

            {desc && <div className="w-3/4 text-secondary mt-3">{desc}</div>}
        </div>
    );
}

export default SectionTitle;
