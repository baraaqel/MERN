import React from 'react';
import { Router } from '@reach/router';
import DetailDogComponent from './components/DetailDogComponent';
import Home from './components/Home';
import Hello from './components/Hello';


function App(){
    return (
        <div className="App">
            <Router>
            <Hello path="/:id/red/blue"/>
                <DetailDogComponent path="/:id"/>
                <Home path="/home"/>
                

            </Router>
        </div>
    )
}
export default App;