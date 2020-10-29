import  React from 'react';
import classes from './BackDrop.css'
const BackDrop= (props) =>{
 let backDropValue=null;
    if(props.show)
    {
        backDropValue= <div  className={classes.BackDrop}  onClick={props.remove}></div>
    }
    else{
        backDropValue=null; 
    }

    return(
   <div>
       {backDropValue}
    </div>   
    );

};

export default BackDrop;




