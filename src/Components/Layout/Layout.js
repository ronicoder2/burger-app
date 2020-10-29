import React , {Component} from 'react';
import Pux from '../../hoc/Pux.js'
import classes from './Layout.css'
import ToolBar from '../Navigation/ToolBar/ToolBar.js'
import  SideDrawer from '../Navigation/SideDrawer/SideDrawer.js'


class Layout extends Component {
   state={
    SideDrawerOpen:false

   }

   onSideDrawerClosed =() =>{
     this.setState({
         SideDrawerOpen:false

     });

   }

   onSideDrawerOpen = ()=>{
      this.setState({
          SideDrawerOpen:true
      })

   }

   onSideDrawerToggleButtonClicked = ()=>{
       
    
    
    this.setState((prevstate)=>{
            
        console.log("value of prevstate="+ JSON.stringify(prevstate)  );
        return {"SideDrawerOpen": ! prevstate.SideDrawerOpen}

    })

   }

    render () {
        return (
            <div>
                <ToolBar  toggleButtonClicked={this.onSideDrawerToggleButtonClicked}  />
                <SideDrawer open={this.state.SideDrawerOpen}   closed = {this.onSideDrawerClosed}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;