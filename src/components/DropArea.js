// DropArea.js
import React, { useState } from "react";

const DropArea = () => {
    const [circles, setCircles] = useState([]);

    const handleDrop = (e) => {
        e.preventDefault();
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;

        // Create a new circle at the drop point
        const newCircle = { x, y };

        // Add the circle to the state
        setCircles([...circles, newCircle]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <svg
            width="400"
            height="400"
            style={{ border: "1px solid black" }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {circles.map((circle, index) => (
                <circle
                    key={index}
                    cx={circle.x}
                    cy={circle.y}
                    r="10"
                    fill="red"
                    stroke="black"
                />
            ))}
        </svg>
    );
};

export default DropArea;
