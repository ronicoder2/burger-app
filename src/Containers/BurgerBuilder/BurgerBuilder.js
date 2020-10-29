import React, { Component } from 'react';
import Pux from '../../hoc/Pux.js'
import Burger from '../../Components/Burger/Burger.js'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js'
import Modal from '../../Components/UI/Modal/Modal.js'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary.js'
import axiosInstance from '../../axios-orders.js'
import Spinner from '../../Components/UI/Spinner/Spinner.js'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler.js'
const INGREDIENT_PRICES={
    salad:0.4,
    bacon:1,
    cheese:0.7,
    meat:2

}
class BurgerBuilder extends Component {

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
   
        },
        price:4,
        purchaseable:false,
        purchasing:false,
        loading:false
   
      }

   

      onContinuePurchaseHandler=()=>{
          // alert('dude please continue');
          this.setState({loading:true});
          const order= {
            ingredients:this.state.ingredients,

            customerinfo:{
                name:"himanshu",
                email:"",
                
                address:{
                    
                    street:"dowing",
                    zipCode:"23",
                    country:"india"
                }
            }



          }
          
         let recievedData= null;
 
          axiosInstance.post('insertCustomer', order).
          then(response => 
            this.setState({loading:false, purchasing:false})
            ).
          catch(error => 
            
           { console.log(error)
            this.setState({loading:false,purchasing:false})}
            );

          

      }

      onModalRemovedHandler=()=>{

        this.setState({purchasing:false});
      }
      purshasinHandler=()=>{
           
         this.setState({purchasing:true});

      }


      updateIsPurchaseable=(updatedingredients)=>{
                
          

          const sum= Object.keys(updatedingredients)
          .map(key=>{
             
             return updatedingredients[key];

          })
          .reduce((sum,ele)=>{
              return sum+ele;

          },0);

          this.setState({
            purchaseable: sum >0

          })

      }



      onIngredientsAddedHandler=(type)=>{
        
        let allingredients= {

            ...this.state.ingredients
        }
        allingredients[type]= allingredients[type]+1;
        let newPrice= this.state.price + INGREDIENT_PRICES[type];

        this.setState({
            ingredients:allingredients,
            price:newPrice

        })
        console.log("changed state is=" + JSON.stringify(this.state));
        this.updateIsPurchaseable(allingredients);
        



      }

      onIngredientRemovedHandler=(type)=>{
  
        let allingredients= {

            ...this.state.ingredients
        }
        if(allingredients[type]!==0)
        {
        allingredients[type]= allingredients[type]-1;
        let newPrice= this.state.price - INGREDIENT_PRICES[type];

        this.setState({
            ingredients:allingredients,
            price:newPrice

        })
    }
    
        console.log("changed state is=" + JSON.stringify(this.state));
        this.updateIsPurchaseable(allingredients);
      };

    render() {

        const disabledinfo={

            ...this.state.ingredients
        }

        for(let info in disabledinfo )
        {
            disabledinfo[info]=   disabledinfo[info] <=0;  
        }
        let orderSummary= <OrderSummary price={this.state.price} 
        cancelPurchase={this.onModalRemovedHandler} continuePurchase={this.onContinuePurchaseHandler} 
         ingredients={this.state.ingredients} /> 
        if(this.state.loading)
        {
            orderSummary= <Spinner />
        }

        return (
            <div>
                <Burger  ingredients={this.state.ingredients} />
                <Modal  show={this.state.purchasing}  removed={this.onModalRemovedHandler}> 
                      {orderSummary}
                  
                </Modal> 
               
                <BuildControls 
                TotalPrice={this.state.price} 
                OnMoreClicked={this.onIngredientsAddedHandler}
                 purchaseable={this.state.purchaseable} 
                 OnLessClicked={this.onIngredientRemovedHandler} 
                 disabledinfo={disabledinfo}
                 Ordered={this.purshasinHandler}
                 />

            </div>


        );

    }


}

export default withErrorHandler(BurgerBuilder,axiosInstance);