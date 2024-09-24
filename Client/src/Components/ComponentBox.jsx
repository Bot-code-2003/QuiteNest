import React, { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

// Placeholder for Delete Icon (you can replace it with an SVG or image)
const DeleteIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-red-500 absolute top-0 right-0 cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ComponentBox = ({ id, moveComponent, deleteComponent }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: "COMPONENT",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "COMPONENT",
    drop: (item) => {
      moveComponent(item.id, id);
    },
  });

  const [bgImage, setBgImage] = useState(null);
  const [content, setContent] = useState("");
  const [editing, setEditing] = useState(false);
  const [showEdit, setShowEdit] = useState(false); // For toggling the edit button
  const [isQuillActive, setIsQuillActive] = useState(false); // For toggling React Quill
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 }); // Width and height state
  const resizerRef = useRef();

  // Function to handle the background image
  const handleImageClick = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      setBgImage(url);
      setShowEdit(true); // Show edit option after image is set
    }
  };

  // Function to handle text editing
  const handleTextClick = () => {
    setIsQuillActive(true);
  };

  // Function to save text and convert it to HTML
  const handleTextSave = (html) => {
    setContent(html);
    setIsQuillActive(false);
    setShowEdit(true); // Show edit option after text is set
  };

  // Handle resizing via dragging the bottom-right corner
  const handleMouseDown = (e) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = dimensions.width;
    const startHeight = dimensions.height;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      const newHeight = startHeight + (e.clientY - startY);

      // Set minimum dimensions
      if (newWidth > 150 && newHeight > 150) {
        setDimensions({ width: newWidth, height: newHeight });
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div
      ref={dragPreview(drop)} // Combine drag and drop refs
      className={`relative p-4 m-2 border rounded-lg bg-gray-800 text-white transition-all ease-in-out duration-200 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
      style={{
        width: `${dimensions.width}px`, // Dynamic width
        height: `${dimensions.height}px`, // Dynamic height
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => !showEdit && setEditing(true)} // Prevent showing options if editing is on
    >
      {/* Delete Button */}
      <DeleteIcon onClick={() => deleteComponent(id)} />

      {/* Drag Handle */}
      <div
        ref={drag} // Drag handle ref
        className="absolute top-2 left-2 cursor-move opacity-0 hover:opacity-100 transition-opacity"
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          transform: "rotate(90deg)", // Rotating 90 degrees to make 2x3 layout
        }}
      >
        :::
      </div>

      {/* Image or Text Options */}
      {!showEdit && (
        <div className="absolute bottom-4 left-2 right-2 flex justify-around">
          <button
            onClick={handleImageClick}
            className="bg-blue-500 px-3 py-1 text-sm rounded-md shadow-md hover:bg-blue-600"
          >
            Add Image
          </button>
          <button
            onClick={handleTextClick}
            className="bg-green-500 px-3 py-1 text-sm rounded-md shadow-md hover:bg-green-600"
          >
            Add Text
          </button>
        </div>
      )}

      {/* React Quill Editor */}
      {isQuillActive && (
        <div className="absolute inset-0 bg-white p-4 rounded-lg text-black overflow-auto">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(value) => setContent(value)}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }], // Add list options
                ["link", "image"],
              ],
            }}
          />
          <button
            onClick={() => handleTextSave(content)}
            className="mt-2 bg-blue-500 px-3 py-1 text-white rounded-md"
          >
            Save
          </button>
        </div>
      )}

      {/* Show HTML content */}
      {!isQuillActive && content && (
        <div
          className="mt-4 text-sm"
          style={{ maxHeight: "100%", overflowY: "auto" }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {/* Show Edit Button */}
      {showEdit && (
        <div className="absolute bottom-4 left-2 right-2 flex justify-around">
          <button
            onClick={() => setEditing(true)}
            className="bg-yellow-500 px-3 py-1 text-sm rounded-md shadow-md hover:bg-yellow-600"
          >
            Edit {bgImage ? "Image" : "Text"}
          </button>
        </div>
      )}

      {/* Resizer Handle */}
      <div
        ref={resizerRef}
        className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 cursor-se-resize"
        onMouseDown={handleMouseDown} // Handle resizing logic
      ></div>
    </div>
  );
};

export default ComponentBox;
