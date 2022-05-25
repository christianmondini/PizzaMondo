import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import '../css/Homeg.css';
import {Link} from "react-router-dom";

class Login extends Component{
    render(){
        return(
            <>
            <Navbar />
            </>
        );
    }
}

export default Login;