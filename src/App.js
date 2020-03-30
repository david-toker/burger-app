import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout/layout';
import BurgerBuilder from './components/burger-builder/burger-builder';
import Checkout from './components/checkout/checkout';
import Orders from './components/orders/orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout}/> 
          <Route path="/orders" component={Orders}/> 
          <Route path="/" exact component={BurgerBuilder}/>
        </Switch> 
      </Layout>
    </div>
  );
}

export default App;
