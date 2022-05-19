//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Carousel from '../components/Carousel.js';
import Homeg from '../Pagine/Home.css';
import Button from '../components/button';

class Home extends Component{

    render() {

        return (
            <>
                <Navbar />
                
                <div className='container' id='distanze'>
                    
                        <div className='row'>
                            <Carousel />
                        </div>
                </div>

                <div className='container' >
                        <Button />

                </div>




            </>
        );
    }
}

export default Home;