import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const RevealOnScroll = ({ children, delay = 0, duration = 1, y = 30 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.fromTo(element,
                        { opacity: 0, y: y },
                        {
                            opacity: 1,
                            y: 0,
                            duration: duration,
                            delay: delay,
                            ease: "power3.out",
                            clearProps: "all"
                        }
                    );
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(element);

        return () => observer.disconnect();
    }, [delay, duration, y]);

    return <div ref={ref} style={{ opacity: 0 }}>{children}</div>;
};

export default RevealOnScroll;
