import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class PreviewProduct extends Component {
    render() {
        const {products, productId} = this.props
        return (
    <Modal trigger={<Button data-product-id={productId}>Show Modal</Button>} size='fullscreen'>
        {products.map(
            product =>
                productId === product.id
                    ? <div key={product.id}>
                    <p>{product.name}</p>
                    </div>
                    : null
        )
        }
    </Modal>
);
    }
}

export default connect(state => ({
    products : state.products.data,
    shops: state.shops.data
}))(PreviewProduct)