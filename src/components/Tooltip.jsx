import React, { useRef } from "react";

function Tooltip() {
    const tooltipRef = useRef(null);
    
    return { tooltipRef };
}

export default Tooltip;
