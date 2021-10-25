import React from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom'
import Dairy from './dairy'
import Veggies from './veggies' 
import Fruits from './fruits'
import Beverages from './beverages'
import GeneralItems from './generalitems'
import './menuitem.css'




function MenuItem(props){
    console.log(props);
    return(
       
            <div className='MenuItem'>
                
            <Link to={props.categoryname.linkUrl}><button style={{borderRadius:"50%"}}>{props.categoryname.name}</button></Link>
            <div id="img1">
                <img src= {props.categoryname.imageUrl} height={250} width={250} align="centre" />
            </div>
            
           
           
            </div>
      
    )
}
export default MenuItem;