import React, { useRef } from "react";

function Tooltip() {
    const tooltipRef = useRef(null);

    // Handler to move tooltip with cursor
    const handleMouseMove = (e, info) => {
        if (tooltipRef.current) {
            tooltipRef.current.style.left = `${e.clientX + 10}px`;
            tooltipRef.current.style.top = `${e.clientY - 30}px`;
            tooltipRef.current.textContent = info;
            tooltipRef.current.style.opacity = 1;
        }
    };

    const handleMouseLeave = () => {
        if (tooltipRef.current) {
            tooltipRef.current.style.opacity = 0;
        }
    };
    return { tooltipRef, handleMouseMove, handleMouseLeave };
}

export default Tooltip;
