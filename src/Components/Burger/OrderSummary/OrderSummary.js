import React,{Component} from 'react';
import Pux from  '../../../hoc/Pux.js';
import Button from '../../UI/Button/Button.js'
class OrderSummary extends Component
{
     componentWillUpdate()
     {
         console.log("[order sumary did update]"); 
     }
     

     render()
     {
        let ingredients_list= Object.keys(this.props.ingredients)
        .map((key)=>{
             
           return <li>{key}:{this.props.ingredients[key]}</li>
              
        });

        return(
            <div>
                <h3>your order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredients_list}
                    <p><strong>Price:{this.props.price.toFixed(2)}</strong></p>
                </ul>
                <Button clicked={this.props.cancelPurchase} btnType="Danger">CANCEL</Button>  
                <Button clicked={this.props.continuePurchase} btnType="Success" >CONTINUE</Button>    
            </div>
    
        );
     }

}



 

export default OrderSummary;