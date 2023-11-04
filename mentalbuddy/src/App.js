import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Greeting from './home'; // Import your Home component
import Buddy from './chatbot'; // Import your Chatbot component

function App() {
  return (
    <BrowserRouter>
    <Greeting/>
    <Routes>
      <Route path='/chatbot' Component={Buddy}>

      </Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
