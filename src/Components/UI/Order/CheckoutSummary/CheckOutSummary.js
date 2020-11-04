import React from 'react';
import Burger from '../../../Burger/Burger.js'
import classes from './CheckOutSummary.css'
import Button from '../../Button/Button.js'
const CheckOutSummary=(props)=>{

   return(
      <div  className={classes.CheckOutSummary}>
        <h1>WE hope its tastes well</h1>
        <div  style={{width:'100%',margin:"auto"}}>
              <Burger  ingredients={props.ingredients} />

        </div>

        <Button btnType="Danger"  clicked={props.checkoutCancelled}>
           CANCEL
           </Button>

           <Button btnType="Success"  clicked={props.checkoutContinue}>
           CONTINUE
           </Button>

    </div>

   )

}

export default CheckOutSummary;