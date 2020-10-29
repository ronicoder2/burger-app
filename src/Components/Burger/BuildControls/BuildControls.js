import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl.js'
const BuildControls =(props)=>{

    const controlLabels=[
     
    
     {"label":"Salad","type":"salad"},
     
     {"label":"Bacon","type":"bacon"},
     {"label":"Chesse","type":"cheese"},
     {"label":"Meat","type":"meat"}

    ];

    const Labels=controlLabels.map((control)=>{
                                                    
        return <BuildControl   type={control.type} moreAdded={props.OnMoreClicked} key={control.label} label={control.label} removed={props.OnLessClicked} disabledinfo={props.disabledinfo[control.type]} />
    });


    return(
        



  
      
       <div className={classes.BuildControls}>
           
           <p>Price is <strong>{props.TotalPrice.toFixed(2)}</strong></p>

           {Labels}
            <button className={classes.OrderButton} onClick={props.Ordered} disabled={!props.purchaseable}>Check out Order</button> 
      </div> 
 
    );
}

export default BuildControls;