import React, {useContext, useEffect, useState} from "react";
import './Pets.css';
import {SearchContext} from "../../context/search.context";
import {PetEntity} from '../../../../../Backend/types';

export const Pets = () =>{
    const {search} = useContext(SearchContext);
    const [pets,setPets] = useState<PetEntity[]>([]);

    useEffect(() =>{
        (async () =>{
            const res = await fetch(`http://localhost:3001/pet/search/${search}`);
            const data = await res.json();

            setPets(data);
        })();
    },[search]);


    return <>
        <div id='pets'>
            <table>
                <tr>
                    <th>Imię </th>
                    <th>Gatunek</th>
                    <th>Wiek</th>
                    <th>Właściciel</th>
                    <th>Numer kontaktowy</th>
                    <th>Ostatnie szczepienie</th>
                    <th>Następne szczepienie</th>
                    <th></th>
                    <th></th>
                </tr>
            {pets.map(pet =>(
                <tr key = {pet.id}>
                    <td>{pet.petName}</td>
                    <td>{pet.petType}</td>
                    <td>{pet.petAge}</td>
                    <td>{pet.ownerName}</td>
                    <td>{pet.ownerPhone}</td>
                    <td>{String(pet.lastVaccinate).substring(0,10)}</td>
                    <td>{String(pet.nextVaccinate).substring(0,10)}</td>
                    <td><button className='petsButtons'>❌</button></td>
                    <td><button className='petsButtons'>💉</button></td>
                </tr>
            ))}
            </table>
        </div>

    </>
}