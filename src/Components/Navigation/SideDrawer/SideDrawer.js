import React from 'react';
import classes from './SideDrawer.css'
import Logo from '../../UI/Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems.js'
import BackDrop from '../../UI/BackDrop/BackDrop.js'
import Pux from '../../../hoc/Pux.js'
const SideDrawer=(props)=>{


    let attClasses=[classes.SideDrawer,classes.Close];
    
    if(props.open)
    {
         attClasses=[classes.SideDrawer,classes.Open];
    }

    return(

        <div>
        <BackDrop show={props.open}  remove = {props.closed}  />
        <div  className={attClasses.join(' ')}>  

           
            <Logo  height="11%"/>

            

            <nav>
                <NavigationItems />
              </nav>  
         </div>   

        </div>
    );

} ;

export default SideDrawer;