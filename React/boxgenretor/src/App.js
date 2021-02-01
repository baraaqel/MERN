import './App.css';
import DisplayBox from './components/DisplayBox';
import BoxForm from './components/BoxForm';
import Ract, {useState} from 'react';



function App() {
  const [currentColors, setCurrentColors] = useState([]);
  const [currentHeights, setCurrentHeights] = useState([]);
  const newBox = (newColors) => {
    setCurrentColors([...currentColors, newColors]);
  }
  const newHeight = (height) => {
    setCurrentHeights([...currentHeights, height]);
  }
  return (
    
    <div className="App">
      <h1>Box Generator</h1>
      <BoxForm onNewColors = {newBox} onNewHeights = {newHeight}/>
      <DisplayBox colors = {currentColors} heights = {currentHeights} >
        
        </DisplayBox>
    </div>
  );
}

export default App;