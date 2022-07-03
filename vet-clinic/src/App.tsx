import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Module} from "./components/Module/Module";
import {Menu} from "./components/Menu/Menu";
import {PetList} from "./components/PetList/PetList";
import {Pets} from "./components/Pets/Pets";


function App() {
  return <>
    <div id="fixed">
  <Header/>
  <Module/>
  <Menu/>
  <PetList/>
    </div>
      <div id="movingPetList">
      <Pets/>
    </div>

  </>
}

export default App;
