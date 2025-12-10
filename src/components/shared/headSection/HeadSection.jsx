// import { Link } from "react-router-dom";
// import "./headSection.css"

// function HeadSection({path,title}){
//     return (
//         <>
//             <div className="headSection text-light d-flex justify-content-center">
//                 <div className="text text-center pt-5 pb-3">
//                     <h1 className="pt-5">{title}</h1>
//                     <div className="route">
//                         <Link to="/" className="link text-decoration-none">
//                             Home
//                         </Link>{" "}
//                         / {path}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default HeadSection;

import { Link } from "react-router-dom";

function HeadSection({ path, title }) {
    return (
        <div
            className="relative flex justify-center text-white"
            style={{
                backgroundImage: `url('/images/ChatGPT Image Nov 9, 2025, 02_27_39 PM.png')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                paddingTop: "6rem",
                paddingBottom: "4rem",
            }}>
            {/* Overlay نصف شفاف */}
            <div className="absolute inset-0 bg-main/50"></div>

            {/* النصوص */}
            <div className="relative text-center z-10">
                <h1 className="text-5xl font-bold mb-4">{title}</h1>
                <div className="text-lg">
                    <Link to="/" className="text-[#e6a770] hover:underline">
                        Home
                    </Link>{" "}
                    / {path}
                </div>
            </div>
        </div>
    );
}

export default HeadSection;
