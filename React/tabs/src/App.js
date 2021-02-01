import React, { useState } from 'react';
import Tab from './components/Tab';
import './App.css';


function App() {
  const [array, setArray] = useState(['this is bara', 'this is also amr', 'this is content too!'])
  return (
    <div className="App">
      <Tab contents = {array}/>
    </div>
  );
}

export default App;
