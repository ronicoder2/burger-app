import React, {Component} from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css'
import axiosInstance from '../../../axios-orders.js'
class ContactData extends Component{
state={
name:'',
email:'',
address:{

    street:'',
    postalCode:''
},
loading:false

}

onOrderButtonClicked =(event)=>{
event.preventDefault();
  alert('dude please continue');
          this.setState({loading:true});
          const order= {
            ingredients:this.props.ingredients,

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
            this.setState({loading:false})
            ).
          catch(error => 
            
           { console.log(error)
            this.setState({loading:false})}
            );

}

render()
{
    return(

        <div className={classes.ContactData}  >
            <h4>Enter your contact information</h4>
             <form>
            <input type="text" name="name" placeholder="enter you name" />
            <input type="email" name="email" placeholder="enter you email" />
            <input type="text" name="street" placeholder="enter you street" />
            <input type="text" name="postal" placeholder="enter you postal code" />
            <br />
            <Button clicked={this.onOrderButtonClicked}  btnType='Success'>ORDER</Button>
            </form>
         </div>   
    );
}



}


export default ContactData;