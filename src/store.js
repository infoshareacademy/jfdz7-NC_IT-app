import { createStore, combineReducers } from 'redux'

import products from './state/products'
import shops from './state/shops'
import filtering from './state/filtering'

const reducer = combineReducers({
    products : products,
    shops: shops,
    filtering: filtering
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
