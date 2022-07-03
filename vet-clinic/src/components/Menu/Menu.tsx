import React, {FormEvent, useContext, useState} from "react";
import './Menu.css';
import {SearchContext} from "../../context/search.context";

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
                <button>➕ Dodaj nowego pacjenta</button>
            </p>
            <form onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <button>🔎 Wyszukaj pacjenta</button>
            </form>
        </div>
    )
}