import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

import '../../style/SingleProductToList.css';

class FilterListForm extends Component {
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Kliknąłeś: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        const { products } = this.props;
        const productsCategories = products.map(product => product.category);
        const uniqProductsCategories = [ ...new Set(productsCategories) ];
        return (
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <label>
                        <select value={this.props.products} onChange={this.handleChange}>
                            {uniqProductsCategories.map((uniqProductsCategory, index) => {
                                return <option key={index} value={uniqProductsCategory}>{uniqProductsCategory}</option>
                            })}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </Form>
            </React.Fragment>
        );
    }
}

export default connect(state => ({
    products : state.products.data,
    shops: state.shops.data
}))(FilterListForm)