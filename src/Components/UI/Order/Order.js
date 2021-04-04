import React from 'react';
import classes from './Order.css'; 


const order =(props)=>{
    let properties=props.allproperties;
     let ingredients= properties.ingredients;
     let customerinfo= properties.customerinfo;
  console.log("ingredients="+ JSON.stringify(ingredients) );
  console.log("customerinfo="+ JSON.stringify(customerinfo) );
  let  ingredients_tags={};
  let customerinfo_tag={};
if(ingredients!=null)
{
     ingredients_tags=(<p>cheese : {ingredients.cheese}  meat : {ingredients.meat} </p> );
}
else{
    ingredients_tags=null;
}


if(customerinfo!=null)
{
    customerinfo_tag=(<p>name : {customerinfo.name}  email : {ingredients.email} </p> );
}

else{
    customerinfo_tag=null;
}


return(

   

    <div className={classes.Order}> 
     {ingredients_tags}
     {customerinfo_tag}
    </div>
);

}
export default order;