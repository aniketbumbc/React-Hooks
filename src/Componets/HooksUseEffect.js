import React, { useState, useEffect } from 'react';

function HooksUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('Updating doc title');
    document.title = `You clicked on button ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Count Hooks {count}</button>
    </div>
  );
}

export default HooksUseEffect;
