import React,{Component, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Module} from "./components/Module/Module";
import {Menu} from "./components/Menu/Menu";
import {PetList} from "./components/PetList/PetList";
import {Pets} from "./components/Pets/Pets";
import { SearchContext } from './context/search.context';
import {Route, Routes} from "react-router-dom";
import {AddPetForm} from "./components/AddPetForm/AddPetForm";
import {DeletePetForm} from "./components/DeletePetForm/DeletePetForm";


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
          </>
        }/>
        <Route path="/addPet" element={
          <>
            <Header/>
            <AddPetForm/>
          </>
          }/>
        <Route path="/deletePet/:petDataParams"  element={
          <>
            <Header/>
            <DeletePetForm/>
          </>
        }/>
      </Routes>
    </SearchContext.Provider>
  </>
}

export default App;
