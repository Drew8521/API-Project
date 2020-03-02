import React from 'react';
import './App.css';
//import loadQuestion from './questionLoader';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'
import { useState, useEffect } from "react";
import md5 from "md5";

function App() {
  
  const TS = "Date.now()";
  const PUBLIC_KEY = "9ac99174c6637a3dd38851c3d6b0d5b1";
  const PRIVATE_KEY = "000a54a0d6a07663808c5278ed1c58f7c9c38bad";
  const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);
  const [charactersState, setCharactersState] = useState([]);
  const [query, setQuery] = useState('Ancient One');
  const [listNames, setListNames] = useState({
    charNames: [
      'Ancient One', 
      'Apocalypse',
      'Blade',
      'Bullseye',
      'Domino',
      'Echo',
      'Elektra',
      'Firelord',
      'Grandmaster',
      'Kitty Pryde',
      'Machine Man',
      'Morph', 
      'Nebula',
      'Silver Surfer',
      'Squirrel Girl',
      'Uatu The Watcher',
      'Viper'
    ]
  });

  useEffect(() => {
    getCharacters();
  }, [query]);

  const getCharacters = async () => {
    const response = await fetch (
      `https://gateway.marvel.com/v1/public/characters?name=${query}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
    );
    const data = await response.json();
    setCharactersState(data.data.results[0]);
  }

  const updateSetQueryState = e => {
    e.preventDefault();
    setQuery(e.target.innerText);
  }

  return (
    //loadQuestion
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/home' component={Home} />
        <Route path='/characters' component={Characters}>
          <h4 className="center"> Characters </h4>
          <p>More characters to Explore:</p>
          {listNames.charNames.map(charName => (
              <button onClick={updateSetQueryState}>
                  <p>{charName}</p>
              </button>
          ))}
          <Characters
            name={charactersState.name}
            description={charactersState.description}
          />
        </Route>
        </div>
    </BrowserRouter>
  )
}

export default App;




