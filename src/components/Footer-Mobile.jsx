import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function MobileFooter() {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(2);

    const navItems = [
        { to: "/about", icon: "fa-user", label: "About" },
        { to: "/skills", icon: "fa-laptop-code", label: "Skills" },
        { to: "/", icon: "fa-home", label: "Home" },
        { to: "/project", icon: "fa-briefcase", label: "Projects" },
        { to: "/experience", icon: "fa-award", label: "Experience" },
    ];

    useEffect(() => {
        const current = navItems.findIndex(item => location.pathname === item.to);
        if (current !== -1) setActiveIndex(current);
    }, [location.pathname]);

    const handleNavClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <nav className="mobile-bottom-nav">
            <ul>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`list ${activeIndex === index ? "active" : ""}`}
                        onClick={() => handleNavClick(index)}
                    >
                        <Link to={item.to} className="nav-icon">
                            <span className="icon">
                                <i className={`fas ${item.icon}`}></i>
                            </span>
                            <span className="text">{item.label}</span>
                        </Link>
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
