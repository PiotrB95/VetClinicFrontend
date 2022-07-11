import React, {SyntheticEvent, useState} from 'react';
import './AddPetForm.css';
import {Btn} from "../common/Btn/Btn";

export const AddPetForm = () =>{
    const [loading,setLoading] = useState(false);
    const [id,setId] = useState('');
    const [form,setForm] = useState({
        petName: '',
        petType: '',
        petAge: 0,
        ownerName: '',
        ownerPhone: 0,
        lastVaccinate: '',
        nextVaccinate:''
    });

    const savePet = async (e:SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        try{
            console.log(form);
            const res = await fetch (`http://localhost:3001/pet`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    ...form
                })
            });

            const data = await res.json();
            setId(data.id);
        }finally {
            setLoading(false)
        }
    }

    const updateForm = (key:string, value: any) =>{
        setForm(form => ({
            ...form,
            [key]: value,
        }))

    }

    if (loading){
        return <h2>Trwa dodawanie nowego pacjenta</h2>
    }

    if(id){
        return <h2>Pacjent <strong>{form.petName}</strong> został dodany do bazy z id <strong>{id}</strong></h2>
    }


    return (
        <div className="flexBackground">
            <form action="" className="addPet" onSubmit={savePet}>
                <p className="formTitle">Formularz nowego pacjenta</p>
                <p>
                    <label>
                        Nazwa:<br/>
                        <input
                            type="text"
                            name="petName"
                            required
                            maxLength={36}
                            minLength={2}
                            value={form.petName}
                            onChange={e=> updateForm('petName',e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Gatunek:<br/>
                        <input
                            type="text"
                            name="petType"
                            required
                            maxLength={36}
                            minLength={2}
                            value={form.petType}
                            onChange={e=> updateForm('petType',e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Wiek:<br/>
                        <input
                            type="number"
                            name="petAge"
                            required
                            max={99}
                            min={1}
                            value={form.petAge}
                            onChange={e=> updateForm('petAge',e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Właściciel:<br/>
                        <input
                            type="text"
                            name="ownerName"
                            required
                            maxLength={36}
                            minLength={2}
                            value={form.ownerName}
                            onChange={e=> updateForm('ownerName',e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Telefon kontaktowy:<br/>
                        <input
                            type="number"
                            name="ownerPhone"
                            required
                            min={111111111}
                            max={999999999}
                            value={form.ownerPhone}
                            onChange={e=> updateForm('ownerPhone',e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Ostatnie szczepienie:<br/>
                        <input
                            type="date"
                            name="lastVaccinate"
                            required
                            value={form.lastVaccinate}
                            onChange={e=> updateForm('lastVaccinate',e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Następne szczepienie:<br/>
                        <input
                            type="date"
                            name="nextVaccinate"
                            required
                            value={form.nextVaccinate}
                            onChange={e=> updateForm('nextVaccinate',e.target.value)}
                        />
                    </label>
                </p>
                <Btn text="Zapisz"/>
            </form>
        </div>

    )
}