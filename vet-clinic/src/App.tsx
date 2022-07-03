import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Module} from "./components/Module/Module";
import {Menu} from "./components/Menu/Menu";
import {PetList} from "./components/PetList/PetList";


function App() {
  return <>
  <Header/>
  <Module/>
  <Menu/>
  <PetList/>
  </>
}

export default App;
