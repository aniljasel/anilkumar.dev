import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorFollowerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorFollower = cursorFollowerRef.current;
        let requestRef;
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        let scale = 1;

        const animate = () => {
            // Move cursor instantly
            if (cursor) {
                cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${scale})`;
            }

            // Move follower with linear interpolation (lerp) for smooth delay
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            if (cursorFollower) {
                cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) scale(${scale})`;
            }

            requestRef = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = () => { scale = 1.5; };
        const handleMouseLeave = () => { scale = 1; };

        document.addEventListener('mousemove', handleMouseMove);

        // Attach hover listeners
        const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .blog-card, .contact-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        requestRef = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            cancelAnimationFrame(requestRef);
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
