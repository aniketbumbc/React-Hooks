import React, { useState, useEffect } from 'react';

function MouseEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log('mouse Evenet');
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log('use Effect Called');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('Clean up Activity');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X- {x} Y-{y}
    </div>
  );
}

export default MouseEffect;
