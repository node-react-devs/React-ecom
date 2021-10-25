import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import NewProduct from "../components/NewProducts/NewProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Home from '../components/Home/Home'


const Main = () => {
  return (

      <Switch>
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signIn" component={Login} />
        <Route exact path="/newProduct" component={NewProduct} />
        <Route exact path="/productDetails" component={ProductDetails} />
        <Route exact path='/' component={Home}/>

      </Switch>

  );
};

export default Main;
