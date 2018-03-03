import React, { Component } from 'react'

import products from '../../data/products.json'

import SingleProductToList from "./SingleProductToList";

class ListOfProductsTest extends Component {
    state = {
        products
    };
    render() {
        return (
            <React.Fragment>
                <ul>
                <SingleProductToList products={this.state.products}/>
                </ul>
            </React.Fragment>
        );
    }
}

export default ListOfProductsTest
