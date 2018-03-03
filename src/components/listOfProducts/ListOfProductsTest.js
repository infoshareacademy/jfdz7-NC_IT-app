import React, { Component } from 'react'

import products from '../../data/products.json'
import shops from '../../data/shops.json'

import SingleProductToList from "./SingleProductToList";

class ListOfProductsTest extends Component {
    state = {
        products,
        shops
    };
    render() {
        return (
            <React.Fragment>
                <ul>
                <SingleProductToList products={this.state.products} shops={this.state.shops}/>
                </ul>
            </React.Fragment>
        );
    }
}

export default ListOfProductsTest
