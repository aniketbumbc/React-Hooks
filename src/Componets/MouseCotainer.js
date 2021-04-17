import React, { useState } from 'react';
import MouseEffect from './MouseEffect';

function MouseCotainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <MouseEffect />}
    </div>
  );
}

export default MouseCotainer;
