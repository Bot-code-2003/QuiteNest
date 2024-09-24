import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ComponentBox from "../Components/ComponentBox";
import AddComponentOptions from "../Components/AddComponentOptions";

const House = () => {
  const [components, setComponents] = useState([]);

  const localObj = JSON.parse(localStorage.getItem("Profile"));
  const user = localObj.user;

  const addComponent = (size) => {
    const newComponent = {
      id: components.length + 1,
      size: size,
    };
    setComponents([...components, newComponent]);
  };

  const deleteComponent = (id) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const moveComponent = (draggedId, droppedOnId) => {
    const draggedComponent = components.find((c) => c.id === draggedId);
    const remainingComponents = components.filter((c) => c.id !== draggedId);
    const droppedOnIndex = remainingComponents.findIndex(
      (c) => c.id === droppedOnId
    );

    const newOrder = [
      ...remainingComponents.slice(0, droppedOnIndex),
      draggedComponent,
      ...remainingComponents.slice(droppedOnIndex),
    ];

    setComponents(newOrder);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl mb-4 text-center">Welcome to {user}'s House</h1>

        <div
          className="grid gap-3"
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {components.map((component) => (
            <ComponentBox
              key={component.id}
              id={component.id}
              size={component.size}
              moveComponent={moveComponent}
              deleteComponent={deleteComponent}
            >
              <p>This is a {component.size} component.</p>
              <button className="p-2 bg-green-500 rounded">Click Me</button>
            </ComponentBox>
          ))}
        </div>

        {/* Add New Component */}
        <AddComponentOptions onAddComponent={addComponent} />
      </div>
    </DndProvider>
  );
};

export default House;
