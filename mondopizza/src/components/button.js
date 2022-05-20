import React, { Component } from 'react';
import App from '../Pagine/App';
import Homeg from '../Pagine/Homeg.css';
import Carrello from '../Pagine/Carrello.js';
import {Link} from "react-router-dom";

function Button(){
    return(
        <>
            <button type="button" className="btn btn-primary" ><Link to="/carrello">carrello</Link></button>
        
        
        
        </>

    );


}

export default Button;