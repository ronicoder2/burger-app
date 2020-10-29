import React from 'react';
import Burger from '../../../Burger/Burger.js'
import classes from './CheckOutSummary.css'
const CheckOutSummary=(props)=>{

   return(
      <div  className={classes.CheckOutSummary}>
        <h1>WE hope its tastes well</h1>
        <div  style={{width:'100%',margin:"auto"}}>
              <Burger  ingredients={props.ingredients} />

        </div>
    </div>

   )

}

export default CheckOutSummary;