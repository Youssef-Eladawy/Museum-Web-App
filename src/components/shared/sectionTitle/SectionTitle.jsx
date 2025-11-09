import "./sectionTitle.css";
function SectionTitle({title,sentence}) {
    return (
        <>
            <div className="sectionTitle py-5 d-flex align-items-center justify-content-center flex-column">
                <div className="title-title fs-4 fw-bold">{title}</div>
                <div className="word fs-1 fw-bold">{sentence}</div>
            </div>
        </>
    );
}

export default SectionTitle;
