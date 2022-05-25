import React, { Component }  from 'react';
import '../css/logo.css';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

function Navbar(){
    return(
        
        <nav className="navbar dimensioni">
  <div className="container-fluid">
    <Link to='/'><button type="button" className="logopizza"></button></Link>
    <p className="navbar-brand navbar-scritte">PizzaMondo</p>
    <Link to='/login'><button type="button" className="login"></button></Link>
    <Link to='/menu'><button type="button" className="shop"></button></Link>
    <Link to='/carrello'><button type="button" className="carrello"></button></Link>
   
  </div>
</nav>
    );
}

export default Navbar;