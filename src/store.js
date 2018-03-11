import { createStore, combineReducers } from 'redux'

import products from './store/products'
import shops from './store/shops'

const reducer = combineReducers({
    products : products,
    shops: shops
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
