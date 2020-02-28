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
  //debugger;
  const TS = "Date.now()";
  const PUBLIC_KEY = "9ac99174c6637a3dd38851c3d6b0d5b1";
  const PRIVATE_KEY = "000a54a0d6a07663808c5278ed1c58f7c9c38bad";
  const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);

  const [chars, setChar] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?name=Squirrel%20Girl&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`
    );
    const data = await response.json();
    setChar(data.data.results);
    console.log(data.data.results);
  }

  return (
    //loadQuestion
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/home' component={Home} />
        <Route path='/characters' component={Characters}> 
          {chars.map(char => (
            <Characters 
              name={char.name}
              description={char.description}
            />
          ))}
        </Route>
       </div>
    </BrowserRouter>
  )
}

export default App;




