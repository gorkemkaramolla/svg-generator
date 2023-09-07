// DraggableComponent.js
import React from "react";

const DraggableComponent = () => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", "dragging"); // Set some data during drag
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "blue",
            }}
        >
            Drag Me
        </div>
    );
};

export default DraggableComponent;
