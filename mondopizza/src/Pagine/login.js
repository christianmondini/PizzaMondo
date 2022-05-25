import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import '../css/Homeg.css';
import {Link} from "react-router-dom";
import Log from'../components/login';

class Login extends Component{
    render(){
        return(
            <>
            <Navbar />
            <div class='row'>
            <Log/>
            </div>
           
            </>
        );
    }
}

export default Login;