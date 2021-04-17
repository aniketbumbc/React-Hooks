import React, { useState, useEffect } from 'react';

function IntervalHooks() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h4>{count}</h4>
    </div>
  );
}

export default IntervalHooks;
