import React, { Component } from 'react';
import '../css/Homeg.css';
import '../css/rigaordine.css';
import App from '../Pagine/App.js';
import Card from '../components/card';


function Ordine(){
    return (
        <div className="container-fluid">
            <div className='row' id="bordi">
                <h4 id='parolesinistra'>Ciao</h4>

                <button type='button' className="ordine" id='bottone'>30</button>

            </div>


        </div>


    );
}

export default Ordine;