import React from 'react';
import './App.css';
import loadQuestion from './questionLoader';

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
