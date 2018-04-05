import thunk from 'redux-thunk'
import firebase from 'firebase'
import './setupFirebase'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import './setupFirebase';
import products, { disableSyncProducts, enableSyncProducts }  from './state/products'
import favorites, { disableSync, enableSync } from './state/favorites'
import shops, { disableSyncShops, enableSyncShops } from './state/shops'
import filtering from './state/filtering'
import auth, { setUser } from './state/auth'
import tasks from  './state/tasks'
import searchBar from './state/searchBar'


const reducer = combineReducers({
    auth,
    tasks,
    products,
    shops,
    filtering: filtering,
    favorites: favorites,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

firebase.auth().onAuthStateChanged(user => {
    if(user !== null) {
        store.dispatch(enableSync());
        store.dispatch(enableSyncProducts());
        store.dispatch(enableSyncShops())
    } else {
        store.dispatch(disableSync());
        store.dispatch(disableSyncProducts());
        store.dispatch(disableSyncShops())
    }
    store.dispatch(setUser(user))
});

export default store;