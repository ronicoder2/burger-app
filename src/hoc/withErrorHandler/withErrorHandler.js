import React,{Component} from 'react';
import Modal from '../../Components/UI/Modal/Modal.js'
const withErrorHandler = (WrappedComponents,axios)=>{

    return class extends  Component
    {

        state={
            errorMessage:null

        }

        removeErrorModal=()=>
        {
            this.setState({
                errorMessage:null
            })
        }

        componentDidMount()
        {
          this.resInterceptor= axios.interceptors.response.use(res=>res,error=>{

            this.setState({errorMessage: error})
           })

          this.reqInterceptor= axios.interceptors.request.use(req=>{
            this.setState({errorMessage:null})
            return req;

           })
        }

        componentWillUnmount()
        {
            axios.interceptors.response.eject(this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
        }
        render(){
             return(
               <div>
                   <Modal show={this.state.errorMessage}  removed={this.removeErrorModal} > 
                   {this.state.errorMessage ? this.state.errorMessage.message:null}
                       </ Modal>
                   <WrappedComponents  />
              </div> 

             )
             

        }
    }



}

export default withErrorHandler;