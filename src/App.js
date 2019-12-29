import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./Navbar/Navbar";
import ProductList from "./ProductList/ProductList";
import ProductDetails from "./ProductDetails/ProductDetails";
import Cart from "./Cart/Cart";
import Default from "./Default/Default";

import {Switch, Route} from "react-router";


function App() {
  return (
      <React.Fragment>
        <Navbar/>
          <Switch>
              <Route exact path={"/"} component={ProductList}/>
              <Route path={"/details"} component={ProductDetails}/>
              <Route path={"/cart"} component={Cart}/>
              <Route component={Default}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
