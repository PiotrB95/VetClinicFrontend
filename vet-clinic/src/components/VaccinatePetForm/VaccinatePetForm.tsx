import React, {SyntheticEvent, useState} from 'react';
import './VaccinatePetForm.css';
import {Btn} from "../common/Btn/Btn";
import {Link, useParams} from "react-router-dom";
import {DeleteUpdateModule} from "../DeleteUpdateModule/DeleteUpdateModule";

export const VaccinatePetForm = () =>{
    const [loading,setLoading] = useState(false);
    const [vaccinationId,setVaccinationId] = useState('');

    const {petId,petName} = useParams();

    const today = new Date();
    const lastVaccination = `${today.toISOString().substring(0,10)}`;
    const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    const nextVaccination = `${nextYear.toISOString().substring(0,10)}`;

    const vaccinationPet = async(e:SyntheticEvent) =>{
        e.preventDefault();
        setLoading(true);

        try {
            const findOne = await fetch(`http://localhost:3001/pet/${petId}`);
            const found = await findOne.json();

            if(!found || found === null){
                return <DeleteUpdateModule text={`Nie ma takiego pacjenta.`}/>
            }


            const vaccinePet = await fetch(`http://localhost:3001/pet/${petId}/${lastVaccination}/${nextVaccination}`,{
                method:'PATCH',
            })
            const vaccinedPet = await vaccinePet.json();

            setVaccinationId(vaccinedPet);
        }finally {
            setLoading(false);
        }

    };


    if (loading){
        return <h2>Trwa aktualizowanie kartoteki pacjenta...</h2>
    }

    if(vaccinationId){
        return (
            <DeleteUpdateModule text={`Pacjent ${petName} został zaszczepiony w dniu ${lastVaccination}.
              Następne szczepienie przewidziane na dzień ${nextVaccination}.`}/>
        )
    }


    return (
        <div className="flexBackground">
            <form action="" className="deletePet" onSubmit={vaccinationPet}>
                <p className="formTitle">Formularz szczepienia pacjenta</p>
                <h1>Pacjent {petName} zostanie zaszczepiony.</h1>
                <Btn text="Ok"/>
                <Link className ='notDeletePet' to='/'>Nie</Link>
            </form>
        </div>

    )
}