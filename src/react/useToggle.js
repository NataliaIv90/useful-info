// : Manage Boolean States Easily "Managing toggle states for modals, dropdowns, or theme switches is effortless with a custom useToggle hook, keeping your code clean and reusable.

import { useState } from "react";

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState(prev => !prev);

  return [state, toggle] as const;
}

export default useToggle;

//Usage

const [isModalOpen, toggleModal] = useToggle();

return (
  <div>
    <button onClick={toggleModal}>Toggle Modal</button>
    {isModalOpen && <p>Modal Content</p>}
  </div>
);