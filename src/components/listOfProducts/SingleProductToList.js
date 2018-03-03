import React, { Component } from 'react'


class SingleProductToList extends Component {
    render() {
        const {products} = this.props; //component który dostaje listę kontaktów w propsach i wyświetlam w liście
        return (
            <li>
                {products.map((product, i) => {
                    return (
                        <li key={product.id}>
                            <strong>{product.name}</strong>
                        </li>
                    )
                })}
            </li>
        )
    }
}

export default SingleProductToList
