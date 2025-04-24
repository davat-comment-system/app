"use client";

import { useEffect, useState } from 'react';

const GradientBackground = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `
                        radial-gradient(
                          circle at ${50 + position.x * 20}% ${50 + position.y * 20}%, 
                          rgba(99, 102, 241, 0.8), 
                          transparent 50%
                        ),
                        radial-gradient(
                          circle at ${30 + position.x * 10}% ${70 + position.y * 10}%, 
                          rgba(236, 72, 153, 0.8), 
                          transparent 50%
                        ),
                        radial-gradient(
                          circle at ${70 + position.x * 10}% ${30 + position.y * 10}%, 
                          rgba(59, 130, 246, 0.8), 
                          transparent 50%
                        )
                      `,
                    transition: 'background 0.3s ease-out'
                }}
            />
        </div>
    );
};

export default GradientBackground;