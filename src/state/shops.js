import shops from '../data/shops.json'

const initialState = {
    data: shops
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}
