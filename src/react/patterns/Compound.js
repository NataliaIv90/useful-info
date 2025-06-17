// 6. Compound Pattern
// Overview:
// The Compound Pattern lets multiple components work together as a single unit, sharing state implicitly. It’s like a parent component controlling its children.

// Example:
// Let’s build an accordion.

// Accordion.jsx
import React, { useState } from 'react';

function Accordion({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      isOpen: activeIndex === index,
      onToggle: () => setActiveIndex(activeIndex === index ? null : index),
    });
  });
}

function AccordionItem({ title, isOpen, onToggle, children }) {
  return (
    <div>
      <button onClick={onToggle}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

// App.jsx (Usage)
import React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

function App() {
  return (
    <Accordion>
      <AccordionItem title="Section 1">Content 1</AccordionItem>
      <AccordionItem title="Section 2">Content 2</AccordionItem>
    </Accordion>
  );
}
// Explanation:
// Accordion manages which item is open and passes isOpen and onToggle to its children.
// AccordionItem uses those props to show/hide content.
// Tradeoffs:
// ✅ Encapsulation — State is managed internally, making the API cleaner.
// ✅ Flexibility — Components can be rearranged without breaking logic.
// ✅ Better Semantics — Mimics HTML-like composition (e.g., <select> & <option>).

// ❌ Initial Complexity — Requires careful component design.
// ❌ Slightly More Boilerplate — More components than a monolithic approach.
