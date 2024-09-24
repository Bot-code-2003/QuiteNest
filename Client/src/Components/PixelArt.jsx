import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";

const PixelArt = () => {
  const [dimensions, setDimensions] = useState({ width: 16, height: 16 });
  const [canvasVisible, setCanvasVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState("#000");
  const [grid, setGrid] = useState([]);
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);
  const [tool, setTool] = useState("draw"); // 'draw', 'fill', 'eraser'
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  const canvasRef = useRef(null);

  // Initialize the grid based on dimensions
  const initGrid = (width, height) => {
    const newGrid = Array(height)
      .fill()
      .map(() => Array(width).fill("#FFF"));
    setGrid(newGrid);
    setHistory([newGrid]);
    setRedoHistory([]); // Clear redo history
  };

  // Handle pixel color change
  const handlePixelClick = (rowIdx, colIdx) => {
    if (tool === "draw") {
      drawPixel(rowIdx, colIdx, currentColor);
    } else if (tool === "fill") {
      fillArea(rowIdx, colIdx, currentColor);
    } else if (tool === "eraser") {
      drawPixel(rowIdx, colIdx, "#FFF");
    }
  };

  const drawPixel = (rowIdx, colIdx, color) => {
    const newGrid = grid.map((row, rIdx) =>
      row.map((col, cIdx) => (rIdx === rowIdx && cIdx === colIdx ? color : col))
    );
    saveToHistory(newGrid);
    setGrid(newGrid);
  };

  const fillArea = (rowIdx, colIdx, newColor) => {
    const targetColor = grid[rowIdx][colIdx];
    if (targetColor === newColor) return;

    const newGrid = [...grid];
    const fillStack = [[rowIdx, colIdx]];

    while (fillStack.length > 0) {
      const [r, c] = fillStack.pop();
      if (
        r >= 0 &&
        r < newGrid.length &&
        c >= 0 &&
        c < newGrid[0].length &&
        newGrid[r][c] === targetColor
      ) {
        newGrid[r][c] = newColor;
        fillStack.push([r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]);
      }
    }
    saveToHistory(newGrid);
    setGrid(newGrid);
  };

  const saveToHistory = (newGrid) => {
    setHistory((prevHistory) => [...prevHistory, newGrid]);
    setRedoHistory([]); // Clear redo history on new action
  };

  const handleMouseDown = (rowIdx, colIdx) => {
    setIsDrawing(true);
    handlePixelClick(rowIdx, colIdx);
  };

  const handleMouseOver = (rowIdx, colIdx) => {
    if (isDrawing) handlePixelClick(rowIdx, colIdx);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const handleCreateCanvas = () => {
    initGrid(dimensions.width, dimensions.height);
    setCanvasVisible(true);
  };

  // Undo last action
  const undo = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      const currentState = newHistory.pop();
      setGrid(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
      setRedoHistory((prevRedo) => [currentState, ...prevRedo]);
    }
  };

  // Redo last undone action
  const redo = () => {
    if (redoHistory.length > 0) {
      const newRedoHistory = [...redoHistory];
      const redoState = newRedoHistory.shift();
      setGrid(redoState);
      setHistory((prevHistory) => [...prevHistory, redoState]);
      setRedoHistory(newRedoHistory);
    }
  };

  // Handle submit
  const handleSubmit = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const scale = 20; // 20px per pixel

    canvas.width = dimensions.width * scale;
    canvas.height = dimensions.height * scale;

    grid.forEach((row, rowIdx) => {
      row.forEach((color, colIdx) => {
        context.fillStyle = color;
        context.fillRect(colIdx * scale, rowIdx * scale, scale, scale);
      });
    });

    // Save the canvas as an image
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "pixel-art.png";
    link.href = imgData;
    link.click();
  };

  const renderCanvas = () => (
    <div
      className="canvas-container"
      onMouseLeave={handleMouseUp} // to stop drawing when cursor leaves
    >
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} style={{ display: "flex" }}>
          {row.map((color, colIdx) => (
            <div
              key={colIdx}
              onMouseDown={() => handleMouseDown(rowIdx, colIdx)}
              onMouseOver={() => handleMouseOver(rowIdx, colIdx)}
              onMouseUp={handleMouseUp}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: color,
                border: showGrid ? "1px solid #ddd" : "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="pixel-art-component">
      <h2 className="text-3xl font-poppins mb-5">Pixel Art Creator</h2>

      {!canvasVisible && (
        <div className="dimension-input">
          <label className="p-2 bg-gray-200 mr-2">
            Width (px):
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) =>
                setDimensions({
                  ...dimensions,
                  width: parseInt(e.target.value),
                })
              }
            />
          </label>
          <label className="p-2 bg-gray-200 mr-2">
            Height (px):
            <input
              type="number"
              value={dimensions.height}
              onChange={(e) =>
                setDimensions({
                  ...dimensions,
                  height: parseInt(e.target.value),
                })
              }
            />
          </label>
          <button
            className="p-2 hover:bg-gray-200"
            onClick={handleCreateCanvas}
          >
            Create Canvas
          </button>
        </div>
      )}

      {canvasVisible && (
        <div className="block sm:flex sm:flex-row gap-20">
          <div className="flex flex-col">
            <div className="tool-selector">
              <h4>Pick a Tool</h4>
              <button
                className={`p-3 bg-gray-200 mr-2 ${
                  tool === "draw" ? "bg-purple-400" : ""
                }`}
                onClick={() => setTool("draw")}
              >
                Draw
              </button>
              <button
                className={`p-3 bg-gray-200 mr-2 ${
                  tool === "fill" ? "bg-purple-400" : ""
                }`}
                onClick={() => setTool("fill")}
              >
                Fill
              </button>
              <button
                className={`p-3 bg-gray-200 mr-2 ${
                  tool === "eraser" ? "bg-purple-400" : ""
                }`}
                onClick={() => setTool("eraser")}
              >
                Eraser
              </button>
            </div>

            <div className="color-picker">
              <h4>Pick a Color</h4>
              <SketchPicker
                color={currentColor}
                onChangeComplete={(color) => setCurrentColor(color.hex)}
              />
            </div>
          </div>

          <div className="canvas flex flex-col">
            {renderCanvas()}

            <button className="submit-btn" onClick={handleSubmit}>
              Save as PNG
            </button>
            <button
              className="reset-btn"
              onClick={() => initGrid(dimensions.width, dimensions.height)}
            >
              Reset Canvas
            </button>
          </div>
        </div>
      )}

      {canvasVisible && (
        <div className="mt-5">
          <button className="p-3 bg-gray-200 mr-2" onClick={undo}>
            Undo
          </button>
          <button className="p-3 bg-gray-200 mr-2" onClick={redo}>
            Redo
          </button>
          <button
            className={`p-3 bg-gray-200 ${showGrid ? "bg-purple-400" : ""}`}
            onClick={() => setShowGrid(!showGrid)}
          >
            {showGrid ? "Hide Grid" : "Show Grid"}
          </button>
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />

      <div className="instructions mt-5">
        <p className="text-sm">
          <strong className="font-poppins text-xl">Instructions:</strong>
          <br />
          - Select a tool: Draw, Fill, or Erase.
          <br />
          - Choose a color using the color picker.
          <br />
          - Click and drag to draw or fill the canvas.
          <br />
          - Use the "Reset Canvas" button to clear the canvas (Note: this action
          will clear your undo history).
          <br />
          - Undo (Ctrl+Z) and Redo (Ctrl+Y) are available, but they won't work
          after resetting the canvas.
          <br />- Use the "Hide Grid" button to toggle grid visibility.
        </p>
      </div>

      <style>{`
        .pixel-art-component {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dimension-input, .tool-selector, .color-picker {
          margin-bottom: 20px;
        }
        .dimension-input input {
          margin-left: 10px;
          width: 60px;
        }
        .canvas-container {
          display: inline-block;
          margin: 10px 0;
          border: 1px solid #000;
        }
        .submit-btn, .reset-btn {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #6200ea;
          color: #fff;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }
        .submit-btn:hover, .reset-btn:hover {
          background-color: #3700b3;
        }
        button {
          transition: background-color 0.2s;
        }
        .instructions {
          max-width: 400px;
          text-align: left;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default PixelArt;
