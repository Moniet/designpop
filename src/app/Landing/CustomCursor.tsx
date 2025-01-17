import { useMotionValue, motion } from "motion/react";
import React, { MouseEventHandler, useEffect, useRef } from "react";

const CustomCursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX ?? 0;
      const y = e.clientY ?? 0;
      ref.current!.style.transform = `translate(${x - 12}px,${y - 12}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="-mt-2 -ml-2">
      <div
        className="fixed size-[25px] bg-[rgba(41,42,255,0.9)] rounded-full z-50 top-0 left-0 backdrop-invert pointer-events-none hidden lg:block "
        style={{ transition: "transform 0.3s ease-out" }}
        ref={ref}
      />
    </div>
  );
};

export default CustomCursor;
