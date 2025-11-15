function SectionTitle({ title, sentence, desc }) {
  return (
    <div className="py-12 flex flex-col items-center justify-center text-center">
      {title && (
        <div
          className="
            relative text-xl  text-primary
            before:content-[''] before:absolute before:top-1/2 before:-left-16 before:-translate-y-1/2
            before:h-[2px] before:w-12 before:bg-primary
            after:content-[''] after:absolute after:top-1/2 after:-right-16 after:-translate-y-1/2
            after:h-[2px] after:w-12 after:bg-primary
          "
        >
          {title}
        </div>
      )}

      {sentence && <div className="text-4xl font-bold mt-3">{sentence}</div>}

      {desc && <div className="w-3/4 text-grey mt-3">{desc}</div>}
    </div>
  );
}

export default SectionTitle;
