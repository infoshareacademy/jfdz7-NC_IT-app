import products from '../data/products.json'

const initialState = {
    data: products
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}
