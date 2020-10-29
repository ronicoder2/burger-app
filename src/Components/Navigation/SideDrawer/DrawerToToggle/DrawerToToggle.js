import React  from 'react';
import classes from './DrawerToToggle.css' 

const DrawerToToggle=(props)=>(
      
    <div onClick={props.clicked}  className={classes.DrawerToToggle}>
       <div></div>
       <div></div>
       <div></div>
     </div>   
    

);

export default DrawerToToggle;