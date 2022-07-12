import React from 'react';
import './ActionBtn.css';
import {Link} from "react-router-dom";


interface Props{
    text: string,
    petId: string,
    to: string,
    class: string,
}


export const ActionBtn = (props: Props) => (
    <Link className={props.class} to={props.to}>{props.text}</Link>
)