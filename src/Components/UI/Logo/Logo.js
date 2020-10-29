import React  from 'react';
import image from '../../../Assets/Images/burger-logo.png';
import classes from './Logo.css'
const Logo=(props)=>(
      
    <div className={classes.Logo} style={{height:props.height}}>
        <img  src={image} alt="myBurger"/>
     </div>   

);

export default Logo;