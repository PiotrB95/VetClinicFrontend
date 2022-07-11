import React, {FormEvent, useContext, useState} from "react";
import './Menu.css';
import {SearchContext} from "../../context/search.context";
import {Btn} from "../common/Btn/Btn";

export const Menu = () =>{

    const {search,setSearch} = useContext(SearchContext);
    const [inputVal,setInputVal] = useState(search);

    const setSearchFromLocalState = (e: FormEvent) =>{
        e.preventDefault();
        setSearch(inputVal);
    }


    return (
        <div id='menu'>
            <p>
                <Btn text='➕ Dodaj nowego pacjenta' to='/addPet'/>
            </p>
            <form onSubmit={setSearchFromLocalState}>
                <input className="search" type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <button className="search">🔎 Wyszukaj pacjenta</button>
            </form>
        </div>
    )
}