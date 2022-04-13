import { useState } from 'react';

export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const handleToggle = () => {
    setState(prev => !prev);
  };

  return [state, handleToggle];
};
