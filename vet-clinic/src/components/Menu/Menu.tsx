import React from "react";
import './Menu.css';

export const Menu = () =>{
    return (
        <div id='menu'>
            <p><button>➕ Dodaj nowego pacjenta</button></p>
            <p><input type="text" value='Szukaj...'/><button>🔎 Wyszukaj pacjenta</button></p>
        </div>
    )
}