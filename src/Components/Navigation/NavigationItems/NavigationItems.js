import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem.js'
const NavigationItems= (props)=>(
    <ul className={classes.NavigationItems} >
               <NavigationItem  link="/">BurgerBuilder</NavigationItem>
          {  // <NavigationItem link ="/" active>Checkout</NavigationItem> uncomment this code if requires
          }
             <NavigationItem link ="/orders" >Orders</NavigationItem>

     </ul>   

);

export default NavigationItems;