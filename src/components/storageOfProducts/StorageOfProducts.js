import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { removeFavorites } from '../../state/favorites'
import { NavLink } from 'react-router-dom'
import Animate from 'react-smooth'

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
                {favorites.length === 0 ? (
                    <Grid centered columns={2}>
                        <Grid.Row>
                    <p key='1'>Hej! Coś tu pusto :( Koniecznie obserwuj z nami produkty!</p>
                        </Grid.Row>
                    </Grid>
                    ) : false}
                {favorites.map((favorite, shops) => {  //.filter(product => this.props.categoryNames.includes(product.category))
                        return (
                            <Animate to={1} from={0.1} attributeName="opacity">
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
                                                <Button secondary data-favorite-id={favorite.id} onClick={this.handleRemoveClick}>
                                                    USUŃ
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </Animate>
                        )
                    })}
                <Grid centered columns={2}>
                    <Grid.Row>
                        <Animate to={1} from={0.1} attributeName="opacity">
                <NavLink to="/">
                    <Button primary>
                    POWRÓT
                    </Button>
                </NavLink>
                        </Animate>
                    </Grid.Row>
                </Grid>
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
