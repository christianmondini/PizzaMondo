import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Ordine from '../components/rigaordine.js';

class Carrello extends Component{
    render(){

        return (
            <>  
                <Navbar />
                
                <Ordine />


            </>
        );
    }


}

export default Carrello;