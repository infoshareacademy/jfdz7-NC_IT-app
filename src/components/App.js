import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import ListOfProducts from "./listOfProducts/ListOfProducts";
import StorageOfProducts from "./storageOfProducts/StorageOfProducts";


class App extends Component {
    render() {
        return (
            <React.Fragment>
              <Route exact path="/" component={ListOfProducts}/>
              <Route exact path="/storage" component={StorageOfProducts}/>
            </React.Fragment>
        );
    }
}

export default App;

