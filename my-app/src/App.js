import React from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';
import FilmLover from './components/FilmLover';
import FilmDetailed from './components/FilmDetailed';

function App() {
  return (
    <div className="App">
      <header>
        <Link to={'/'}>           
        <button>Home</button>
        </Link>
        <h1 className='intro'>Great Movies Collections</h1>
      </header>
      <div>
        <Route exact path ='/' component={FilmLover}/>
        <Route path="/FilmDetailed/:id" component={FilmDetailed} />
      </div>
    </div>
  );
}



export default App;