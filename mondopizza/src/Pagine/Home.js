//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import '../css/Homeg.css';
import ReactDOM from 'react-dom/client'
import {Link} from "react-router-dom";
import Parallaxe from '../components/parallax';



class Homepage extends Component {
    render(){
        return (
            <>
                <Navbar />
                <Parallaxe/>
               
            </>
        )

    }

};


export default Homepage ;