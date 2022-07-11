import React from 'react';
import './DeleteUpdateModule.css';
import {Link} from "react-router-dom";

interface Props{
    text: string,

}

export const DeleteUpdateModule = (props: Props)=>{
 return (
     <div className="flexBackground">
         <div className="deletedUpdatedPet">
             <p className="deletedUpdatedText">{props.text}</p>
             <Link className ='deletedUpdatedLink' to='/'>Powrót</Link>
         </div>
     </div>
 )
}