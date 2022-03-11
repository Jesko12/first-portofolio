import React, { Component } from "react";
import './App.css';
import RootScreen from "./pages/rootScreen";
import { Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRoute from "./helpers/mainRoute";
import ProtectedRoute from "./helpers/protectedRoute";
import { getCurrentUser } from "./services/authService";
import { Fragment } from "react/cjs/react.production.min";
import MainSkeleton from "./components/mainSkeleton";
import Logout from "./common/logout";
import UserAgrocery from "./components/Agrocery/userAgrocery";
import OrdersAgrocery from "./components/Order/ordersAgrocery";
import ProductsAgrocery from "./components/Product/productsAgrocery";
import AddProduct from "./components/Product/addProduct";
import EditProduct from "./components/Product/editProduct";
import OrderDetail from "./components/Order/orderDetail";
import BannersAgrocery from "./components/Banner/bannersAgrocery";
import AddBanner from "./components/Banner/addBanner";


class App extends Component {
    state = {
        user: {},
    };

    componentDidMount() {
        const user = getCurrentUser();
        this.setState({ user });
    }   

    render(){
        const { user } = this.state;
        return (
        <Fragment>
            <MainSkeleton user = { user }>
        <Switch>
            <ProtectedRoute path="/logout" component={Logout} />
            <ProtectedRoute  path="/agrocery/banners/add" component={AddBanner} />
            <ProtectedRoute  path="/agrocery/products/add" component={AddProduct} />
            <ProtectedRoute  path="/agrocery/product/edit/:id" component={EditProduct} />
            <ProtectedRoute  path="/agrocery/order/detail/:id" component={OrderDetail} />
            <ProtectedRoute  path="/agrocery/products" component={ProductsAgrocery} />
            <ProtectedRoute  path="/agrocery/orders" component={OrdersAgrocery} />
            <ProtectedRoute  path="/agrocery/banners" component={BannersAgrocery} />
            <ProtectedRoute
              path="/agrocery/users"
              component={UserAgrocery}
            />
            <MainRoute path="/login" component={RootScreen}/>
            <Redirect from="/" exact to="/agrocery/users"/>
        </Switch>
            </MainSkeleton>
            <ToastContainer />
        </Fragment>
       );
   } 
}

export default App;
