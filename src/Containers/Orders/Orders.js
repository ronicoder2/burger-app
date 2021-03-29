import React,{Component} from 'react';
import Order from '../../Components/UI/Order/Order.js';
import axiosInstance from '../../axios-orders.js'
import { element } from 'prop-types';
class Orders extends Component{
state={

    orders:[],
    loading:true
}
buildOrders=(requestArray)=>{

    //console.log('output='+ JSON.stringify(requestArray));
    this.setState({
        loading:false,
        orders:requestArray


       });
 console.log("values="+JSON.stringify(this.state.orders));
}
componentDidMount()
{
    axiosInstance.get('/getAllCustomerInfo')
    .then(res=>{
        
          this.buildOrders(res.data);   
          



    })
    .catch(err=>{

        this.setState({
            loading:false
 
           });
 
    })
}


render()
{

    let test=
        this.state.orders.map(element=>{

         return   <Order />
    });
    


    return(
   <div>
    {test}
   
   </div> 

    );

}



}

export default Orders;


