import React from 'react';
import logo from './logo.svg';
import IdCards from './components/IdCards'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import './App.css';

function App() {
  return (
    <div className="App">
      <IdCards />
      <Greetings lang="de">Santiago</Greetings>
      <Random min={2} max={2000}/>
      <BoxColor r={255} g={0} b={0} >RGB Box</BoxColor>
      <BoxColor r={128} g={255} b={0} >RGB Box</BoxColor>
        
    </div>
  );
}

export default App;
