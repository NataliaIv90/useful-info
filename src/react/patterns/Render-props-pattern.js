// 3. Render Props Pattern
// Overview:
// The Render Props pattern lets a component share its logic by passing a function as a prop. This function tells the component what to render, giving you flexibility while reusing logic.

// Example:
// Let’s build a component that tracks the mouse position.

// MouseTracker.jsx
import React, { useState } from 'react';

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
}

// App.jsx (Usage)
import React from 'react';
import MouseTracker from './MouseTracker';

function App() {
  return (
    <MouseTracker
      render={(position) => (
        <h3>
          Mouse at: ({position.x}, {position.y})
        </h3>
      )}
    />
  );
}
// Explanation:
// MouseTracker manages the mouse position state and calls the render prop with that data.
// In App, we decide what to display using the position.
// Tradeoffs:
// ✅ Flexibility — Dynamic rendering control.
// ✅ Avoids HOC limitations — No prop conflicts.
// ❌ Nested callbacks — Can lead to messy JSX.
