import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Cursor({ scaling, children }) {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);
  const scaleOne = {
    x: largecircle.x - 20,
    y: largecircle.y - 20,
    transition: { type: "spring", mass: 3 },
  }
  const scaleTwo = {
    x: smallcircle.x - 8,
    y: smallcircle.y - 8,
    transition: { type: "spring", mass: 2 },
  }
  const styleOne = {
    scale: scaling ? 0.1 : 1
  }
  return (
    <div>
      <motion.div
        style={styleOne}
        animate={scaleOne}
        className="w-[35px] h-[35px] rounded-full border border-primary fixed z-[9999] pointer-events-none transition-all duration-150"
      />
      <motion.div
        animate={scaleTwo}
        className="w-[10px] h-[10px] rounded-full z-[99999] bg-primary fixed pointer-events-none transition-all duration-150"
      />
      {children}
    </div>
  );
}
