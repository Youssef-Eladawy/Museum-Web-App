import "./sectionTitle.css";
function SectionTitle({title,sentence,desc}) {
    return (
        <>
            <div className="sectionTitle py-5 d-flex align-items-center justify-content-center flex-column">
                {
                    title &&
                    <div className="title-title fs-4 fw-bold">{title}</div>
                }
                {
                    sentence &&
                    <div className="word fs-1 fw-bold">{sentence}</div>
                }
                {
                    desc &&
                    <div className="desc w-75 text-secondary text-center mt-3">{desc}</div>
                }
            </div>
        </>
    );
}

export default SectionTitle;
