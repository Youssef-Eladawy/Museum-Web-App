function MainHeader({ title }) {
  return (
    <h5 className="text-primary uppercase tracking-widest relative inline-block before:absolute before:content-[''] before:w-12 before:border before:border-primary before:top-1/2 before:left-[-60px] after:absolute after:content-[''] after:w-12 after:border after:border-primary after:top-1/2 after:right-[-60px]">
      {title}
    </h5>
  );
}

export default MainHeader;
