import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { Route, BrowserRouter } from 'react-router-dom'



import  FilterListForm from "./FilterListForm"
import SingleProductToList from "./SingleProductToList";
import SearchBar from "./SearchBar";

import '../../style/ListOfProducts.css';

class ListOfProducts extends Component {

    render() {
        return (
            <BrowserRouter>
            <Grid centered>
                <Grid.Row>
                    <Grid.Column width={16}>
            <React.Fragment>
                <SearchBar/>
                <FilterListForm/>
                <SingleProductToList />
            </React.Fragment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </BrowserRouter>
        );
    }
}

export default connect(state => ({
    products : state.products.data,
    shops: state.shops.data
}))(ListOfProducts)