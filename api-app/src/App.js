import React from 'react';
import './App.css';
import loadQuestion from './questionLoader';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'

function App() {
  return (
    loadQuestion
    <BrowserRouter>
       <div className="App">
         <Navbar />
         <Route path='/home' component={Home} />
         <Route path='/characters' component={Characters} />
       </div>
    </BrowserRouter>
  );
}

export default App;
