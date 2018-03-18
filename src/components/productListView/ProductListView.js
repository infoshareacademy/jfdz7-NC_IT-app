import React, {Component} from 'react'

class ProductListView extends Component {
    render() {
        return (
            <React.Fragment>
            <h1>Produkty:</h1>
                {this.props.error && <p>{this.props.error.message}</p>}
                {this.props.isFetching && <p>Fetching...</p>}
                {this.props.products &&
                this.props.products.map(product => (
                    <p key={product.id}>{product.name}</p>
                ))}
            </React.Fragment>

        )
    }
}

export default ProductListView