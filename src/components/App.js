import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import ListOfProducts from "./listOfProducts/ListOfProducts";
import StorageOfProducts from "./storageOfProducts/StorageOfProducts";
import SignOutButton from './RegisterForm/SignOutButton';

import Auth from '../components/RegisterForm/Auth';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Auth>
                    <SignOutButton/>
                    <Route exact path="/" component={ListOfProducts}/>
                    <Route exact path="/storage" component={StorageOfProducts}/>
                </Auth>
            </React.Fragment>
        )}
}
export default App;

