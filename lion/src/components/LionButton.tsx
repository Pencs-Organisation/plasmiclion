// components/LionButton.tsx
import React, { useEffect, useRef } from 'react';
import '@lion/core/lion-button.js';

interface LionButtonProps {
  children?: React.ReactNode;
  type?: string;
  disabled?: boolean;
}

const LionButton: React.FC<LionButtonProps> = ({ children, ...props }) => {
  const buttonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      Object.entries(props).forEach(([key, value]) => {
        (buttonRef.current as any)[key] = value;
      });
    }
  }, [props]);

  return (
    <lion-button ref={buttonRef}>
      {children}
    </lion-button>
  );
};

export default LionButton;
