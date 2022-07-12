import React from "react";
import './VaccinationAlert.css';


interface Props {
    class: string;
    nextVaccinate: string;
}

export const VaccinationAlert = (props: Props) =>(
    <td className={props.class}>{String(props.nextVaccinate).substring(0,10)}</td>
)
