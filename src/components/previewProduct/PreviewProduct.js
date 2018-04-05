import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

class PreviewProduct extends Component {
    render() {
        const {products, productId} = this.props
        return (
            <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
                <Header icon='archive' content='Archive Old Messages' />
                <Modal.Content>
                    <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Modal.Content>
                        {products.map(
                            product =>
                                productId === product.id
                                    ? <div key={product.id}>{product.name}</div>
                                    : null
                        )
                        }
                    </Modal.Content>
                </Modal.Actions>
            </Modal>
);
    }
}

export default connect(state => ({
    products : state.products.data,
    shops: state.shops.data
}))(PreviewProduct)