import React from 'react';
import classes from './Burger.css'
import Burgeringredients from './BurgerIngredients/Burgeringredients.js'
const Burger =(props)=>{


   let  transformedIngredients= Object.keys(props.ingredients)
   .map(idkeys =>{
          return [...Array(props.ingredients[idkeys])]
          .map((_,i)=>{

              return <Burgeringredients key={idkeys+i} type={idkeys} />
          });
   }).reduce((arr,el)=>{
      return arr.concat(el)

   },[]);

   if(transformedIngredients.length===0)
   {
      transformedIngredients=<p>please start adding ingredients</p>
   }
   

   return( 
    <div className={classes.Burger} >
          <Burgeringredients  type="bread-top" />
         {/* <Burgeringredients  type="Meat" />
         <Burgeringredients  type="Cheese" /> */}
         {transformedIngredients}
         <Burgeringredients  type="bread-bottom" /> 
        
        
    </div>   
   );
}

export default Burger;


