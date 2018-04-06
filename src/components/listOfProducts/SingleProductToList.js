import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addFavorites } from '../../state/favorites'
import _ from 'underscore'
import PreviewProduct from "../previewProduct/PreviewProduct"
import { activatePagination, changePage } from "../../state/pagination";


class SingleProductToList extends Component {
    handleClick = event => {
        const currentpageId = event.target.dataset.currentpageId
        this.props.changePage(currentpageId)
    }
    render() {
        const { products, activeFilterNames, favorites, searchBar, pagination } = this.props; //component który dostaje listę produktów w propsach i wyświetlam w liście
        const buttonBlock = favorites.map((favorite) => favorite.productFavorite.id);

        const indexOfLastProduct = pagination.currentPage * pagination.todosPerPage;
        const indexOfFirstProduct = indexOfLastProduct - pagination.todosPerPage;
        const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / pagination.todosPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <React.Fragment>
                {currentProducts.filter(
                    product =>
                    searchBar === undefined || searchBar === ''
                    ? true
                    : product.name.toLowerCase().indexOf(searchBar) !== -1
                ).filter(
                    product =>
                        activeFilterNames === undefined || activeFilterNames === ''
                            ? true
                            : product.category.indexOf(activeFilterNames) !== -1
                )
                    .map((product, shops) => {  //.filter(product => this.props.categoryNames.includes(product.category))
                    return (
                        <div key={product.id}>
                            <Grid centered columns={2}>
                                <Grid.Row>
                                    <Grid.Column floated='right' width={4}>
                                        <strong><p>{product.name}</p></strong>
                                    </Grid.Column>
                                    <Grid.Column floated='right' width={6}>
                                        <span><p>
                                            Najniższa cena: {Math.min.apply(Math,product.availabity.map((product) => {
                                            return (product.price)
                                            }))} zł
                                        </p></span>
                                        <p>Dostępny w <strong>{product.availabity.length}</strong> sklepach</p>
                                        <div>
                                            <PreviewProduct productId={product.id} data-product-id={product.id}/>
                                            { _.contains(buttonBlock, product.id)
                                                ? <Button color='green'>Obserwujesz</Button>
                                                : <Button secondary data-product-id={product.id}
                                                          onClick={ event => {
                                                              const productId = event.target.dataset.productId
                                                              const productFavoriteArr = products.filter(product => product.id === productId)
                                                              const productFavorite = Object.assign({}, ...productFavoriteArr)
                                                              this.props.addFavorites(productFavorite)
                                                          }}>
                                                    OBSERWUJ
                                                </Button>
                                            }
                                        </div>

                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    )
                })}
                <Grid centered>
                    <Grid.Row>
                {pageNumbers.map(number => {
                    return (
                        <Button key={number} data-currentpage-id={number} onClick={this.handleClick}>
                            {number}
                        </Button>
                    )})}
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
        activeFilterNames: state.filtering.activeFilterNames,
        searchBar: state.searchBar.searchBar,
        pagination: state.pagination
    }),
    { addFavorites, activatePagination, changePage }
)(SingleProductToList)
