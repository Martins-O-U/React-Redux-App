import React from 'react';
import './App.css';

import FilmLover from './components/FilmLover';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How Well Do you know your Movies</h1>
      </header>
      <div>
        <FilmLover />
      </div>
    </div>
  );
}



export default App;