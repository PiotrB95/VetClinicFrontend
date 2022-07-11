import React from "react";

import './Btn.css';
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
}

export const Btn = (props: Props) =>(
    props.to
        ? <Link className='linkButton' to={props.to}>{props.text}</Link>
        : <button className='petsButtons' > {props.text}</button>

)
