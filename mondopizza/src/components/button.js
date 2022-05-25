import React,{Component} from 'react';
import {Link} from "react-router-dom";

function bottone (){
    return(
        <Link to='/'><button type="button" className="btn btn-info">Home</button></Link>

    );

}

export default bottone;