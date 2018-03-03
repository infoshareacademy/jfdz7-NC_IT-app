import React, { Component } from 'react'



class SingleProductToList extends Component {
    render() {
        const {products} = this.props; //component który dostaje listę produktów w propsach i wyświetlam w liście
        return (
            <li>
                {products.map((product, i) => {
                    return (
                        <li key={product.id}>
                            <div>
                            <strong>Kategoria: {product.category}</strong><br/>
                            <strong>{product.name}</strong>
                                <ul>
                                    <li>
                                        Najniższa cena:
                                    {Math.min.apply(Math,product.availabity.map((product) => {
                                        return (product.price)
                                }))}
                                    </li>
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </li>
        )
    }
}

export default SingleProductToList
