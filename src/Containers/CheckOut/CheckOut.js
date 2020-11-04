import React,{Component} from 'react';
import CheckOutSummary  from '../../Components/UI/Order/CheckoutSummary/CheckOutSummary.js'
import {withRouter} from 'react-router-dom';

class CheckOut extends Component
{

    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:1,
            meat:1
   
        }

    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let forwardedingredients = {};
        for (let param of query.entries()) {
            // ['salad', '1']
         
            forwardedingredients[param[0]] = +param[1];
        }

       
        this.setState({ingredients: forwardedingredients});
    }

    onCheckOutCancelled=()=>{

     this.props.history.goBack();
    }

    onCheckOutContinue=()=>{

     this.props.history.replace('/checkout/contact-data');

    }
    render()
    {
     return(
      <div>

          <CheckOutSummary   ingredients = {this.state.ingredients} 
           checkoutCancelled={this.onCheckOutCancelled}
           checkoutContinue={this.onCheckOutContinue}/>
          </div>

     );

    }
}

export default withRouter(CheckOut);