import React from 'react';
import classes from './ToolBar.css'
import Logo from '../../UI/Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems.js'
import DrawerToToggle from '../SideDrawer/DrawerToToggle/DrawerToToggle.js'
const ToolBar=(props)=>{


    return(
        <header className={classes.ToolBar}>
            <DrawerToToggle  clicked={props.toggleButtonClicked} />
             <Logo />
             <nav className={classes.Desktop}>
                 <NavigationItems />
                 
            </nav>

         </header>   

    );

} ;

export default ToolBar;