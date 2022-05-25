import React from 'react';
import ReactDOM from 'react-dom/client';
import  './css/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from '../src/Pagine/Home';
  
import App from './Pagine/App';
import Home from './Pagine/Home';
import Carrello from './Pagine/Carrello';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/menu' element={<App/>}/>
            <Route path='/carrello' element={<Carrello/>}/>
        </Routes>

    </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();