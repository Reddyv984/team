import React from 'react';
import "./menu.css"
import './comp.css';
import {Link} from 'react-router-dom'
import MainLogin from '../../MainLogin/mainlogin';

export default function veggies(){
  return(
    <div className="compCss"> 
    <h2><Link to='/' class="colorchange">AMNESIA 
                <Link to="/Login" Component={MainLogin}>
                <button style={{fontSize:"20px", float: "right"}} id="Login">
                  Login
                </button></Link></Link></h2>

<h1 style={{textAlign:'center',padding: '50px'}}>Welocome to Biryani Den </h1> 
<div style={{textAlign:'center'}}>
<li>Chiken Biryani</li>
<li>Mutton Biryani</li>
<li>veg Biryani</li></div>  
<div></div>    
    </div>
  )
}