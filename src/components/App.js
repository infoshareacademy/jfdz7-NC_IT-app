import React from 'react';
import ProductListView from "./productListView/ProductListView";


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <input type='text'/>
                <ProductListView/>
            </React.Fragment>
        );
    }
}

export default App;
