//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Carousel from '../components/Carousel.js';
import Homeg from './Homeg.css';
import Button from '../components/button';
import Carrello from '../Pagine/Carrello.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


class Home extends Component{

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate(path);
    }
  
    

    render() {

        return (
            <>
                <Navbar />
                
                <div className='container' id='distanze'>
                    
                        <div className='row'>
                            <Carousel />
                        </div>
                </div>

                <div className='container' id='container'>
                        <Button />
                        
                </div>




            </>
        );
    }
}

export default Home;