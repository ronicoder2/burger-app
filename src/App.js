import React, { Component } from 'react';

import Layout from './Components/Layout/Layout.js';
import {Route, Switch} from 'react-router-dom'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder.js'
import CheckOut from './Containers/CheckOut/CheckOut.js'
class App extends Component {
  render() {
    return (
      <div >
          <Layout>
            <Switch>
            <Route path="/checkout"  component={CheckOut} />
            <Route path="/"  exact component={BurgerBuilder} />
            </Switch>
            
          </Layout>
      </div>
    );
  }
}

export default App;
