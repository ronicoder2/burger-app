import React from 'react';
import classes from './BuildControl.css'
const BuildControl =(props)=>{

    return(
       <div className={classes.BuildControl}>
           
            <div className={classes.Label}>{props.label}</div>
          
            
            <button className={classes.Less} onClick={()=>{props.removed(props.type)}} disabled={props.disabledinfo}>Less</button>
            <button className={classes.More} onClick={()=>{props.moreAdded(props.type)}} >More</button>
      </div> 

    );
}

export default BuildControl;