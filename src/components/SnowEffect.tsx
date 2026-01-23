"use client";

import { useEffect, useState } from "react";

export default function SnowEffect() {
    const [flakes, setFlakes] = useState<{ id: number; left: string; size: string; duration: string; delay: string }[]>([]);

    useEffect(() => {
        const flakeCount = 50;
        const newFlakes = Array.from({ length: flakeCount }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 1}px`,
            duration: `${Math.random() * 10 + 5}s`,
            delay: `${Math.random() * 10}s`,
        }));
        setFlakes(newFlakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snow-flake bg-white rounded-full opacity-30 shadow-[0_0_10px_white]"
                    style={{
                        left: flake.left,
                        width: flake.size,
                        height: flake.size,
                        animationDuration: flake.duration,
                        animationDelay: flake.delay,
                        top: "-20px",
                    }}
                />
            ))}
        </div>
    );
}
