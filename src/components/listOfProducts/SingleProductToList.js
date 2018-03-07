import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'

import '../../style/SingleProductToList.css';

class SingleProductToList extends Component {
    handleRemoveClick = event => {
        const productId = event.target.dataset.productId;
        this.props.removeProduct(productId)
    }
    render() {
        const { products, shops } = this.props; //component który dostaje listę produktów w propsach i wyświetlam w liście
        return (
            <React.Fragment>
                {products.map((product, shops) => {
                    return (
                        <div key={product.id}>
                            <Grid centered columns={12} divided>
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <strong><p>Kategoria: {product.category}</p></strong>
                                        <strong><p>{product.name}</p></strong>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        <span><p>
                                            Najniższa cena: {Math.min.apply(Math,product.availabity.map((product) => {
                                            return (product.price)
                                            }))} zł
                                        </p></span>
                                        <Button primary>Porównaj CENY</Button>
                                        <Button secondary data-product-id={product.id} onClick={this.handleRemoveClick}>
                                            USUŃ - TEST
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default SingleProductToList
