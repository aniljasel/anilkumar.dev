import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function MobileFooter() {
    const navItems = [
        { icon: "fa-user", label: "About" },
        { icon: "fa-laptop-code", label: "Skills" },
        { icon: "fa-home", label: "Home" },
        { icon: "fa-briefcase", label: "Projects" },
        { icon: "fa-award", label: "Experience" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <nav className="mobile-bottom-nav">
            <ul>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`list ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <a href="#" className="nav-icon">
                            <span className="icon">
                                <i className={`fas ${item.icon}`}></i>
                            </span>
                            <span className="text">{item.label}</span>
                        </a>
                    </li>
                ))}
                <div
                    className="indicator"
                    style={{
                        transform: `translateX(calc(${activeIndex} * 70px))`,
                    }}
                ></div>
            </ul>
        </nav>
    );
}

export default MobileFooter;