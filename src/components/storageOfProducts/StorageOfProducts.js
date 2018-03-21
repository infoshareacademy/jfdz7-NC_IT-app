import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { removeFavorites } from '../../state/favorites'

import '../../style/SingleProductToList.css';

class StorageOfProducts extends Component {
    handleRemoveClick = event => {
        const favoriteId = event.target.dataset.favoriteId
        this.props.removeFavorites(favoriteId)
    }
    render() {
        const { favorites, products } = this.props; //component który dostaje listę produktów w propsach i wyświetlam w liście
        return (
            <React.Fragment>
                {favorites.map((favorite, shops) => {  //.filter(product => this.props.categoryNames.includes(product.category))
                        return (
                            <div key={favorite.id}>
                                    <Grid centered>
                                        <Grid.Row>
                                            <Grid.Column width={6}>
                                                <strong><p>{products[favorite.key].name}</p></strong>
                                            </Grid.Column>
                                            <Grid.Column width={6}>
                                        <span><p>
                                            Najniższa cena: {Math.min.apply(Math,products[favorite.key].availabity.map((product) => {
                                            return (product.price)
                                        }))} zł
                                        </p></span>
                                                <p>Dostępny w <strong>{products[favorite.key].availabity.length}</strong> sklepach</p>
                                                <Button secondary data-favorite-id={favorite.id} onClick={this.handleRemoveClick}>
                                                    usuń
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



//const mapDispatchToProps = dispatch => ({
//addProducts: id => dispatch({type: 'REMOVE', id})
//});

export default connect(
    state => ({
        products: state.products.data,
        shops: state.shops.data,
        favorites: state.favorites.data,
    }),
    { removeFavorites }
)(StorageOfProducts)
