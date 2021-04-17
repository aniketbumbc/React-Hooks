import React from 'react';
import './App.css';
//import ClassCounter from './Componets/ClassCounter';
//import HooksUseEffect from './Componets/HooksUseEffect';
//import MouseEffect from './Componets/MouseEffect';
//import MouseCotainer from './Componets/MouseCotainer';
import IntervalCounter from './Componets/IntervalCounter';
import IntervalHooks from './Componets/IntervalHooks';

function App() {
  return (
    <div className='App'>
      <br></br>
      {/* <ClassCounter /> */}
      {/* <HooksUseEffect /> */}
      <IntervalCounter />
      <IntervalHooks />
    </div>
  );
}

export default App;
