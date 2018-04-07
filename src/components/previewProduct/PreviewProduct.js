import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Header, Divider, Image, Modal, Icon, List} from 'semantic-ui-react'
import {addFavorites} from '../../state/favorites'
import _ from "underscore";

class PreviewProduct extends Component {


    render() {
        const {products, productId, favorites} = this.props;
        const buttonBlock = favorites.map((favorite) => favorite.productFavorite.id);
        return (
            products.map(
                product =>
                    productId === product.id
                        ?
                        <Modal trigger={<Button color='teal' animated>
                            <Button.Content visible>
                                Szczegóły
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name='eye'/>
                            </Button.Content>
                        </Button>} dimmer='blurring'>
                            <Modal.Header>{product.name}</Modal.Header>
                            <Modal.Content image>
                                <Image src={product.img} wrapped fluid/>
                                <Modal.Description>
                                    <Header>{product.description}</Header>

                                    <Divider hidden/>

                                    <p>
                                        Najniższa cena: {Math.min.apply(Math, product.availabity.map((product) => {
                                        return (
                                            product.price
                                        )
                                    }))} zł
                                    </p>

                                    <Divider hidden/>

                                    <p>Dostępny w <strong>{product.availabity.length}</strong> sklepach:</p>

                                    <Divider hidden/>

                                    <List divided relaxed>
                                        {product.availabity.map((productShop, index) => {
                                            return (
                                                <List.Item key={index}>{productShop.shopName}: {productShop.price} zł</List.Item>
                                            )
                                        })}
                                    </List>
                                </Modal.Description>
                            </Modal.Content>
                            <Modal.Actions>
                                {_.contains(buttonBlock, product.id)
                                    ? <Button color='green'>Obserwujesz</Button>
                                    : <Button secondary data-product-id={product.id}
                                              onClick={event => {
                                                  const productId = event.target.dataset.productId
                                                  const productFavoriteArr = products.filter(product => product.id === productId)
                                                  const productFavorite = Object.assign({}, ...productFavoriteArr)
                                                  this.props.addFavorites(productFavorite)
                                              }}>
                                        OBSERWUJ
                                    </Button>
                                }
                            </Modal.Actions>
                        </Modal>
                        : null
            )


        );
    }
}

export default connect(state => ({
    favorites: state.favorites.data,
    products: state.products.data,
}), {addFavorites})(PreviewProduct)