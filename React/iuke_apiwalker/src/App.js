import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';


function App() {
  return (
    <div className="App">

<Router>
     <Home path="/"/>
     <People path="/people" />
     <Planets path="/planet" />
     </Router>
    </div>
  );
}

export default App;
