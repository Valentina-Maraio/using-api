import React, { useEffect, useState } from 'react';
import Char from './comps/Char';

import './App.css';

function App() {

  const API = 'https://rickandmortyapi.com/api/character';

  const [ char, setChar ] = useState([]);


  const fetchChar = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => setChar(data.results))
    .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchChar(API)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty API</h1>
        <Char char={char} />
      </header>
    </div>
  );
}

export default App;
