import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { removeFavorites } from '../../state/favorites'
import { NavLink } from 'react-router-dom'


import '../../style/ListOfProducts.css';

class StorageOfProducts extends Component {
    handleRemoveClick = event => {
        const favoriteId = event.target.dataset.favoriteId
        this.props.removeFavorites(favoriteId)
    }
    render() {
        const { favorites } = this.props; //component który dostaje listę produktów w propsach i wyświetlam w liście
        return (
            <React.Fragment>
                {favorites.map((favorite, shops) => {  //.filter(product => this.props.categoryNames.includes(product.category))
                        return (
                            <div key={favorite.productFavorite.id}>
                                <Grid centered columns={2}>
                                    <Grid.Row>
                                        <Grid.Column floated='right' width={4}>
                                                <strong><p>{favorite.productFavorite.name}</p></strong>
                                            </Grid.Column>
                                        <Grid.Column floated='right' width={6}>
                                        <span><p>
                                            Najniższa cena: {Math.min.apply(Math,favorite.productFavorite.availabity.map((favorite) => {
                                            return (favorite.price)
                                        }))} zł
                                        </p></span>
                                                <p>Dostępny w <strong>{favorite.productFavorite.availabity.length}</strong> sklepach</p>
                                                <Button secondary data-favorite-id={favorite.productFavorite.id} onClick={this.handleRemoveClick}>
                                                    USUŃ
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                        )
                    })}
                <NavLink to="/">
                    POWRÓT
                </NavLink>
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
