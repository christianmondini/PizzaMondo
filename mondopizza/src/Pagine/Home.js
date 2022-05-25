//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import '../css/Homeg.css';
import {Link} from "react-router-dom";
import Paralax from '../components/paralax';



class Homepage extends Component {
    render(){
        return (
            <>
                <Navbar />
                <Paralax/>
               
            </>
        )

    }

};


export default Homepage ;