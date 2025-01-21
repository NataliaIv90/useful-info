// Track Previous State 📜 Tracking a value's previous state is essential for comparisons and animations, easily achieved with a custom usePrevious hook.

import { useEffect, useRef } from "react";

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef < T > ();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;

// Usage

const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

return (
  <p>
    Now: {count}, Before: {prevCount}
  </p>
);