import React, { useRef, useState, useEffect } from 'react';

const MagneticButton = ({ children, strength = 0.3, className = '', style = {} }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const dx = clientX - centerX;
        const dy = clientY - centerY;

        setPosition({ x: dx * strength, y: dy * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{
                ...style,
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
                display: style.display || 'inline-block'
            }}
        >
            {children}
        </div>
    );
};

export default MagneticButton;
