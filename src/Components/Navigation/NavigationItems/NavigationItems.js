import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem.js'
const NavigationItems= (props)=>(
    <ul className={classes.NavigationItems} >
               <NavigationItem  link="/">Checkout</NavigationItem>
               <NavigationItem link ="/" active>BurgerBuilder</NavigationItem>
     </ul>   

);

export default NavigationItems;