import './App.css';
import FirstAssi from './components/FirstAssi'

function App() {
  return (
    <div className="App">
      <FirstAssi firstName={"bara"} scondName={"aqel"} age={"Age : 45"} hair={"Hair color : red"}/>
      <FirstAssi firstName={"yaman"} scondName={"aqel"} age={"Age : 15"} hair={"Hair color : green"}/>
      <FirstAssi firstName={"mohammed"} scondName={"aqel"} age={"Age : 25"} hair={"Hair color : yellow"}/>
      <FirstAssi firstName={"ishaq"} scondName={"aqel"} age={"Age : 10"} hair={"Hair color : black  "}/>
      
    </div>
  );
}

export default App;
