import React from 'react';
import './ActionBtn.css';
import {Link} from "react-router-dom";


interface Props{
    text: string,
    petId: string,
    to: string,
}


// function deletePet(petId:string):string|any{
//     console.log(petId);
// }

export const ActionBtn = (props: Props) => (
    <Link className='linkButton' to={props.to}>{props.text}</Link>
    // <button className='petsButtons' value={props.petId} onClick={()=>deletePet(props.petId)}> {props.text}</button>
)