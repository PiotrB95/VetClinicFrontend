import React, {SyntheticEvent, useState} from 'react';
import './DeletePetForm.css';
import {Btn} from "../common/Btn/Btn";
import {Link, useParams} from "react-router-dom";
import {DeleteUpdateModule} from "../DeleteUpdateModule/DeleteUpdateModule";

export const DeletePetForm = () =>{
    const [loading,setLoading] = useState(false);
    const [deletedId,setDeletedId] = useState('');

    const {petId,petName} = useParams();

    const deletePet = async(e:SyntheticEvent) =>{
        e.preventDefault();
        setLoading(true);

        try {
            const findOne = await fetch(`http://localhost:3001/pet/${petId}`);
            const found = await findOne.json();

            if(!found || found === null){
                return<h1>nie ma takiego pacjenta</h1>
            }

            const deletePet = await fetch(`http://localhost:3001/pet/${petId}`,{
                method:'DELETE',
            })
            const deletedPet = await deletePet.json();
            setDeletedId(deletedPet);
        }finally {
            setLoading(false)
        }

    };


    if (loading){
        return <h2>Trwa usuwanie pacjenta</h2>
    }

    if(deletedId){
        return (
            <DeleteUpdateModule text={`Pacjent ${petName} o id ${petId} został usunięty.`}/>
        )
    }


    return (
        <div className="flexBackground">
            <form action="" className="deletePet" onSubmit={deletePet}>
                <p className="formTitle">Formularz usuwania pacjenta</p>
                    <h1>Pacjent {petName} o {petId} zostanie usunięty.</h1>
                <Btn text="Ok"/>
                <Link className ='notDeletePet' to='/'>Nie</Link>
            </form>
        </div>

    )
}