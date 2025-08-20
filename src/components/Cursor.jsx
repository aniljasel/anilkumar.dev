import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorFollowerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorFollower = cursorFollowerRef.current;

        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            // Add slight delay to follower cursor for smoother effect
            setTimeout(() => {
                cursorFollower.style.left = `${e.clientX}px`;
                cursorFollower.style.top = `${e.clientY}px`;
            }, 100);
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .blog-card, .contact-card');

        const handleMouseEnter = () => {
            cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollowerRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
        };

        const handleMouseLeave = () => {
            cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollowerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        };

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup event listeners on unmount
        return () => {
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-follower" ref={cursorFollowerRef}></div>
        </>
    );
};

export default CustomCursor;
