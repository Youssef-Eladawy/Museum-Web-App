import { Link } from "react-router-dom";
import "./headSection.css"

function HeadSection({path,title}){
    return (
        <>
            <div className="headSection text-light d-flex justify-content-center">
                <div className="text text-center pt-5 pb-3">
                    <h1 className="pt-5">{title}</h1>
                    <div className="route">
                        <Link to="/" className="link text-decoration-none">
                            Home
                        </Link>{" "}
                        / {path}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadSection;