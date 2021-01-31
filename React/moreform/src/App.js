import SignUp from './components/SignUp';
import Display from './components/Display';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  })
  return (
    <div className="App">
      <SignUp inputs={state} setInputs={setState}/>
      <Display data={state}/>
    </div>
  );
}

export default App;