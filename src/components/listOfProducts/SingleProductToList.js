import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import '../../style/SingleProductToList.css';

class SingleProductToList extends Component {
    render() {
        const { products } = this.props; //component który dostaje listę produktów w propsach i wyświetlam w liście
        return (
            <React.Fragment>
                {products.map((product, shops) => {  //.filter(product => this.props.categoryNames.includes(product.category))
                    return (
                        <div key={product.id}>
                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column width={6}>
                                        <strong><p>{product.name}</p></strong>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <span><p>
                                            Najniższa cena: {Math.min.apply(Math,product.availabity.map((product) => {
                                            return (product.price)
                                            }))} zł
                                        </p></span>
                                        <p>Dostępny w <strong>{product.availabity.length}</strong> sklepach</p>
                                        <Button primary>Porównaj CENY</Button>
                                        <Button secondary data-product-id={product.id} onClick={() => this.props.remove(product.id)}>
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

const mapStateToProps = state => ({
    products: state.products.data,
    shops: state.shops.data,
})

const mapDispatchToProps = dispatch => ({
    remove: id => dispatch({type: 'REMOVE', id})
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductToList)

