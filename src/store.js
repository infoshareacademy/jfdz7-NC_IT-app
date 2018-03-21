import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import firebase from 'firebase'
import './setupFirebase'
import products from './state/products'
import favorites, { disableSync, enableSync } from './state/favorites'
import shops from './state/shops'
import filtering from './state/filtering'
import auth, { setUser } from './state/auth'


const reducer = combineReducers({
    products : products,
    shops: shops,
    filtering: filtering,
    favorites: favorites,
    auth: auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

firebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
        store.dispatch(enableSync())
    } else {
        store.dispatch(disableSync())
    }
    store.dispatch(setUser(user))
})

export default store
