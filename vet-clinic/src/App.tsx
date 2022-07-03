import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Module} from "./components/Module/Module";
import {Menu} from "./components/Menu/Menu";
import {PetList} from "./components/PetList/PetList";
import {Pets} from "./components/Pets/Pets";
import { SearchContext } from './context/search.context';


function App() {
  const[search, setSearch] = useState('');

  return <>
    <SearchContext.Provider value={{search,setSearch}}>
      <div id="fixed">
        <Header/>
        <Module/>
        <Menu/>
        <PetList/>
      </div>
      <div id="movingPetList">
        <Pets/>
      </div>
    </SearchContext.Provider>
  </>
}

export default App;
