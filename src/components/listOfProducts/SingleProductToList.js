import React, { Component } from 'react'

import '../../style/SingleProductToList.css';

class SingleProductToList extends Component {
    handleRemoveClick = event => {
        const productId = event.target.dataset.productId;
        this.props.removeProduct(productId)
    }
    render() {
        const { products, shops } = this.props; //component który dostaje listę produktów w propsach i wyświetlam w liście
        return (
            <li>
                {products.map((product, shops) => {
                    return (
                        <li key={product.id}>
                            <div>
                            <strong>Kategoria: {product.category}</strong><br/>
                            <strong>{product.name}</strong><br/>
                                <span>
                                    Najniższa cena: {Math.min.apply(Math,product.availabity.map((product) => {
                                        return (product.price)
                                    }))} zł
                                </span>
                                <br/>
                                <button>Porównaj CENY</button>
                                <br/>
                                <button data-product-id={product.id} onClick={this.handleRemoveClick}>
                                    USUŃ - TEST
                                </button>
                            </div>
                        </li>
                    )
                })}
            </li>
        )
    }
}

export default SingleProductToList
