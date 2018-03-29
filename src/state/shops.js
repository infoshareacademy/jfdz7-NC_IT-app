import firebase from 'firebase'

// Action types
const SET_SHOPS = 'shops/SET_SHOPS'

const setShops = shops => ({
    type: SET_SHOPS,
    shops
})

let shopsRef
let callback

export const enableSyncShops = () => dispatch => {
    shopsRef = firebase.database().ref('/shops/')
    callback = snapshot => {
        const value = snapshot.val()
        const shops = Object.entries(value || {}).map(([id, values]) => ({
            id,
            ...values
        }))

        dispatch(setShops(shops))
    }

    shopsRef.on('value', callback)
}

export const disableSyncShops = () => dispatch => {
    shopsRef.off('value', callback)
}

// Initial state
const initialState = {
    data: []
}

// Reducer
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_SHOPS:
            return {
                ...state,
                data: action.shops
            }
        default:
            return state
    }
}
