//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import '../css/Homeg.css';
import {Link} from "react-router-dom";


class Homepage extends Component {
    render(){
        return (
            <>
                <Navbar />
                <div>
                    <h1>Homepage </h1>
                    <Link to='/menu'>Vai al menu</Link>
                </div>
            </>
        )

    }

};


export default Homepage ;