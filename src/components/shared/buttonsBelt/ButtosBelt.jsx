import "./ButtonsBelt.css";

function ButtonsBelt({ buttons, editClasses,tagsDataSet }) {
    function show(e) {
        let tags = document.querySelectorAll(editClasses);
        let lastActive = document.querySelector(`button.active`);

        lastActive.classList.remove("active");
        e.target.classList.add("active");

        if (e.target.dataset.attr === "all") {
            for (const tag of tags) {
                tag.classList.add("d-block");
                tag.classList.remove("d-none");
            }
            return;
        }

        for (const tag of tags) {
            if (tag.dataset[tagsDataSet] !== e.target.dataset.attr) {
                tag.classList.add("d-none");
                tag.classList.remove("d-block");
            } else {
                tag.classList.add("d-block");
                tag.classList.remove("d-none");
            }
        }
    }

    return (
        <>
            <div className="belt d-flex justify-content-evenly flex-wrap gap-4 mb-4">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={show}
                        data-attr={button.attr}
                        className={
                            index == 0
                                ? "rounded-pill p-2 active"
                                : "rounded-pill p-2"
                        }>
                        {button.content}
                    </button>
                ))}
            </div>
        </>
    );
}

export default ButtonsBelt;
