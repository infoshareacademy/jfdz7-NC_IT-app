import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import SingleProductToList from "./SingleProductToList";

import products from '../../data/products.json'
import shops from '../../data/shops.json'

import '../../style/SingleProductToList.css';

class ListOfProductsTest extends Component {
    state = {
        products,
        shops
    };
    removeProduct = productId => {
        this.setState({
            products: this.state.products.filter(product => product.id !== productId)
        })
    };
    render() {
        return (
            <React.Fragment>
                <SingleProductToList
                    products={this.state.products}
                    shops={this.state.shops}
                    removeProduct={this.removeProduct}/>
            </React.Fragment>
        );
    }
}

export default ListOfProductsTest
