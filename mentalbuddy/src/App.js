import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Greeting from './home'; // Import your Home component
import Buddy from './chatbot'; // Import your Chatbot component
import Song from './song';
import Movie from './movie';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={Greeting}/>
    <Route path='/movies' Component={Movie}/>
    <Route path='/chatbot' Component={Buddy}/>
      <Route path='/songs' Component={Song}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
