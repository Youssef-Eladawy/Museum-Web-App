import { useRef } from "react";
import "../../componentsStyles.css";
import HeadSection from "../../shared/headSection/HeadSection";
import TestomonialComponent from "./TestmonialComponent";

function Testimonial() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300; // distance to scroll
    const duration = 600; // ms — increase for slower scroll (e.g., 1000 for 1s)
    const start = current.scrollLeft;
    const end =
      direction === "left" ? start - scrollAmount : start + scrollAmount;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic (smooth natural feel)
      const ease = 1 - Math.pow(1 - progress, 3);
      current.scrollLeft = start + (end - start) * ease;
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <>
      <TestomonialComponent />
    </>
  );
}

export default Testimonial;
