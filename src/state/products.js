import products from '../data/products.json'

const initialState = {
    data: products
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'REMOVE':
            return {
                data: state.data.filter(product => product.id !== action.id)
            };
        default:
            return state
    }
}
