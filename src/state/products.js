import firebase from 'firebase'


// Action types
const SET_PRODUCTS = 'products/SET_PRODUCTS'

const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})

let productsRef
let callback

export const enableSyncProducts = () => dispatch => {
    productsRef = firebase.database().ref('/products/')
    callback = snapshot => {
        const value = snapshot.val()
        const products = Object.entries(value || {}).map(([id, values]) => ({
            id,
            ...values
        }))

        dispatch(setProducts(products))
    }

    productsRef.on('value', callback)
}

export const disableSyncProducts = () => dispatch => {
    productsRef.off('value', callback)
}

// Initial state
const initialState = {
    data: []
}

// Reducer
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                data: action.products
            }
        default:
            return state
    }
}
