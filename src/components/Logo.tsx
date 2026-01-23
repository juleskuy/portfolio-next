import React from "react";

export const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="16"
                cy="16"
                r="14"
                stroke="currentColor"
                strokeWidth="2.5"
            />
            <path
                d="M16 4L18.5 13.5L28 16L18.5 18.5L16 28L13.5 18.5L4 16L13.5 13.5L16 4Z"
                fill="currentColor"
            />
        </svg>
    );
};
