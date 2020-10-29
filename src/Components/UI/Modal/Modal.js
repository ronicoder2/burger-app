import React,{Component} from 'react';
import classes from './Modal.css'
import BackDrop from '../BackDrop/BackDrop.js';
import Pux from '../../../hoc/Pux.js'
class Modal extends Component
{

    shouldComponentUpdate(nextProps, nextState)
    {
          return nextProps.show !== this.props.show  || nextProps.children!== this.props.children ;
    }

   componentWillUpdate()
   {
       console.log("[Modal] will update");
   }

    render()
    {
           


        return(
            <div>
    
            <BackDrop show={this.props.show}   remove={this.props.removed}/>
             <div className={classes.Modal}
             style={{
                 transform: this.props.show ? 'translateY(0)':'translateY(-100)',
                 opacity: this.props.show ? '1' : '0'
             }}>
                 {this.props.children}
              </div>   
          </div>
        );
    }

}

 
export default Modal;