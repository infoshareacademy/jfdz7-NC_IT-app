import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import SignOutButton from './RegisterForm/SignOutButton';
import ListOfProductsTest from "./listOfProducts/ListOfProducts";

import Auth from '../components/RegisterForm/Auth';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Auth>
                    <SignOutButton/>
                        <Route exact path="/" component={ListOfProductsTest}/>
                </Auth>


export default App;

