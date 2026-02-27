import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);

        const handleHoverStart = (e) => {
            if (e.target.closest('button, a, input, textarea, [role="button"]')) {
                setIsHovering(true);
            }
        };

        const handleHoverEnd = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseenter', onMouseEnter);
        window.addEventListener('mouseleave', onMouseLeave);
        window.addEventListener('mouseover', handleHoverStart);
        window.addEventListener('mouseout', handleHoverEnd);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseenter', onMouseEnter);
            window.removeEventListener('mouseleave', onMouseLeave);
            window.removeEventListener('mouseover', handleHoverStart);
            window.removeEventListener('mouseout', handleHoverEnd);
        };
    }, []);

    useEffect(() => {
        const followMouse = () => {
            setFollowerPosition((prev) => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                return {
                    x: prev.x + dx * 0.15,
                    y: prev.y + dy * 0.15,
                };
            });
            requestAnimationFrame(followMouse);
        };

        const animationId = requestAnimationFrame(followMouse);
        return () => cancelAnimationFrame(animationId);
    }, [position]);

    if (!isVisible) return null;

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
                style={{
                    transform: `translate(${position.x - 5}px, ${position.y - 5}px) ${isHovering ? 'scale(3)' : 'scale(1)'}`,
                }}
            />
            <div
                className={`custom-cursor-follower ${isHovering ? 'hovering' : ''}`}
                style={{
                    transform: `translate(${followerPosition.x - 20}px, ${followerPosition.y - 20}px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
                }}
            />
        </>
    );
};

export default CustomCursor;
