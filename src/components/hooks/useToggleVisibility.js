import { useState, useEffect, useRef } from 'react';

const useToggleVisibility = (initialState = false, timeoutTime) => {
  const [visible, setVisibility] = useState(initialState);
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  const toggleVisibility = () => {
    setVisibility(!visible);
  };

  useEffect(() => {
    const timer = timeoutTime && visibleRef.current
      ? setTimeout(() => toggleVisibility(), timeoutTime)
      : null;
    return () => clearTimeout(timer);
  });

  return [visible, toggleVisibility, setVisibility];
};

export default useToggleVisibility;
