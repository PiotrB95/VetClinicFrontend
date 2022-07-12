import React,{ useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Menu} from "./components/Menu/Menu";
import {PetList} from "./components/PetList/PetList";
import {Pets} from "./components/Pets/Pets";
import { SearchContext } from './context/search.context';
import {Route, Routes} from "react-router-dom";
import {AddPetForm} from "./components/AddPetForm/AddPetForm";
import {DeletePetForm} from "./components/DeletePetForm/DeletePetForm";
import {VaccinatePetForm} from "./components/VaccinatePetForm/VaccinatePetForm";
import {Module} from "./components/Module/Module";


function App() {
  const[search, setSearch] = useState('');

  return <>
    <SearchContext.Provider value={{search,setSearch}}>
      <Routes>
        <Route path="/" element={
          <>
          <div id="fixed">
            <Header/>
            <Menu/>
            <PetList/>
          </div>
          <div id="movingPetList">
            <Pets/>
          </div>
            <Module/>
          </>
        }/>
        <Route path="/addPet" element={
          <>
            <Header/>
            <AddPetForm/>
            <Module/>
          </>
          }/>
        <Route path="/deletePet/:petId/:petName"  element={
          <>
            <Header/>
            <DeletePetForm/>
            <Module/>
          </>
        }/>
        <Route path="/vaccinatePet/:petId/:petName"  element={
          <>
            <Header/>
            <VaccinatePetForm/>
            <Module/>
          </>
        }/>
      </Routes>

    </SearchContext.Provider>
  </>
}

export default App;
