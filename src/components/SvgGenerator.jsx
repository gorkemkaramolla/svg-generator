import React, { useState, useRef } from 'react';

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const shapesArray = ['rect', 'circle', 'ellipse', 'polygon']; // Add more shapes as needed

const SVGBackgroundGenerator = () => {
  const [shapeType, setShapeType] = useState('rect');
  const [svgOutput, setSvgOutput] = useState(null);
  const [shapeSize, setShapeSize] = useState(50); // Initial size
  const svgRef = useRef(null);

  const createShape = () => {
    const shape = document.createElementNS(
      'http://www.w3.org/2000/svg',
      shapeType
    );

    if (shapeType === 'rect') {
      shape.setAttribute('width', `${shapeSize}%`);
      shape.setAttribute('height', `${shapeSize}%`);
    } else if (shapeType === 'circle') {
      shape.setAttribute('r', `${shapeSize / 2}%`);
    } else if (shapeType === 'ellipse') {
      shape.setAttribute('rx', `${shapeSize / 2}%`);
      shape.setAttribute('ry', `${shapeSize / 2}%`);
    } else if (shapeType === 'polygon') {
      const points = `${Math.random() * 100}%,${Math.random() * 100}% ${
        Math.random() * 100
      }%,${Math.random() * 100}% ${Math.random() * 100}%,${
        Math.random() * 100
      }%`;
      shape.setAttribute('points', points);
    }

    shape.setAttribute('cx', `${Math.random() * 100}%`);
    shape.setAttribute('cy', `${Math.random() * 100}%`);
    shape.setAttribute('fill', getRandomColor());

    svgRef.current.appendChild(shape);
  };

  const clearShapes = () => {
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
  };

  const generateSvgOutput = () => {
    const svgElement = svgRef.current;
    const svgString = new XMLSerializer().serializeToString(svgElement);
    setSvgOutput(svgString);
  };

  return (
    <div className='shape-generator'>
      <div>
        <label>Select Shape:</label>
        <select onChange={(e) => setShapeType(e.target.value)}>
          {shapesArray.map((shape) => (
            <option key={shape} value={shape}>
              {shape}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Adjust Size:</label>
        <input
          type='range'
          min='10'
          max='100'
          step='10'
          value={shapeSize}
          onChange={(e) => setShapeSize(parseInt(e.target.value))}
        />
      </div>
      <button onClick={createShape}>Add Shape</button>
      <button onClick={clearShapes}>Clear Shapes</button>
      <div>
        <svg
          id='background-svg'
          xmlns='http://www.w3.org/2000/svg'
          ref={svgRef}
        ></svg>
      </div>
      <div>
        <button onClick={generateSvgOutput}>Generate SVG Output</button>
      </div>
      <div>
        <textarea
          rows='5'
          cols='40'
          readOnly
          value={svgOutput || 'Generated SVG will appear here.'}
        />
      </div>
    </div>
  );
};

export default SVGBackgroundGenerator;
