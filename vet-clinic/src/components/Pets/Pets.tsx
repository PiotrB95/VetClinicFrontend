import React, {useContext, useEffect, useState} from "react";
import './Pets.css';
import {SearchContext} from "../../context/search.context";
import {PetEntity} from '../../../../../Backend/types';
import { ActionBtn } from "../common/ActionBtn/ActionBtn";
import {VaccinationAlert} from "../VaccinationAlert/VaccinationAlert";

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

    const vaccinationAlert = (nextVaccinate:string) =>{
        const thirteenDaysLater = new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000));
        const sevenDaysLater = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000));

        const vaccineReminding = new Date(nextVaccinate);

        if(sevenDaysLater > vaccineReminding){
            return <VaccinationAlert class='redAlert' nextVaccinate={nextVaccinate}/>
        }else if(thirteenDaysLater > vaccineReminding){
            return <VaccinationAlert class='yellowAlert' nextVaccinate={nextVaccinate}/>
        }else{
            return <VaccinationAlert class='noAlert' nextVaccinate={nextVaccinate}/>
        }

    }



    return <>
        <div id='pets'>
            <table>
                <tr>
                    <th>Lp.</th>
                    <th>Imię</th>
                    <th>Gatunek</th>
                    <th>Wiek</th>
                    <th>Właściciel</th>
                    <th>Numer kontaktowy</th>
                    <th>Ostatnie szczepienie</th>
                    <th>Następne szczepienie</th>
                    <th>Usuń</th>
                    <th>Zaszczep</th>
                </tr>
            {pets.map((pet,index) =>(
                <tr key = {pet.id}>
                    <td>{index + 1 + '.'}</td>
                    <td>{pet.petName}</td>
                    <td>{pet.petType}</td>
                    <td>{pet.petAge}</td>
                    <td>{pet.ownerName}</td>
                    <td>{pet.ownerPhone}</td>
                    <td>{String(pet.lastVaccinate).substring(0,10)}</td>
                    {vaccinationAlert(pet.nextVaccinate)}
                    <td><ActionBtn class={'normalButton'} text='❌' petId={pet.id} to={`/deletePet/${pet.id}/${pet.petName}`}/></td>
                    <td><ActionBtn class={'normalButton'} text='💉' petId={pet.id} to={`/vaccinatePet/${pet.id}/${pet.petName}`}/></td>
                </tr>
            ))}
            </table>
        </div>

    </>
}