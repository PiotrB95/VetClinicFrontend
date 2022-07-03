import React, {useContext, useEffect} from "react";
import './Pets.css';
import {SearchContext} from "../../context/search.context";

export const Pets = () =>{
    const {search} = useContext(SearchContext);

    useEffect(() =>{
        console.log('działa?', search);
    },[search]);


    return <>
        <div id='pets'>
                <h1>{search}</h1>
        </div>

    </>
}