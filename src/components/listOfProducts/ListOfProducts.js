import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


import SingleProductToList from "./SingleProductToList";

import products from '../../data/products.json'
import shops from '../../data/shops.json'

import '../../style/SingleProductToList.css';

class ListOfProducts extends Component {
    state = {
        products,
        shops
    };
    removeProduct = productId => {
        this.setState({
            products: this.state.products.filter(product => product.id !== productId)
        })
    };



    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
}
    render() {
        const productsCategories = products.map(product => product.category);
        const uniqProductsCategories = [ ...new Set(productsCategories) ];
        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={this.state.products} onChange={this.handleChange}>
                            {uniqProductsCategories.map((uniqProductsCategory, index) => {
                                return <option key={index} value={uniqProductsCategory}>{uniqProductsCategory}</option>
                            })}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </Form>
                <SingleProductToList
                    products={this.state.products}
                    shops={this.state.shops}
                    removeProduct={this.removeProduct}
                    />
            </React.Fragment>
        );
    }
}

export default ListOfProducts
