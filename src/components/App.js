import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import ListOfProductsTest from "./listOfProducts/ListOfProducts";


class App extends Component {
    render() {
        return (
            <React.Fragment>
              <Route exact path="/" component={ListOfProductsTest}/>
            </React.Fragment>
        );
    }
}

export default App;

