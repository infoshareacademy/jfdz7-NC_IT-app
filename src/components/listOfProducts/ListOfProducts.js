import React, { Component } from 'react'
import { connect } from 'react-redux'


import  FilterListForm from "./FilterListForm"
import SingleProductToList from "./SingleProductToList";

import '../../style/SingleProductToList.css';

class ListOfProducts extends Component {
    render() {
        return (
            <React.Fragment>
                <FilterListForm/>
                <SingleProductToList />
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    products : state.products.data,
    shops: state.shops.data
}))(ListOfProducts)