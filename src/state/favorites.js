import firebase from 'firebase'

// Action types
const SET_FAVORITES = 'storage/SET_FAVORITES'

const REMOVE = 'storage/REMOVE'


const setFavorites = favorites => ({
    type: SET_FAVORITES,
    favorites
})

let favoritesRef
let callback

export const enableSync = () => dispatch => {
    const userUid = firebase.auth().currentUser.uid

    favoritesRef = firebase.database().ref('/storage/' + userUid + '/favorites')
    callback = snapshot => {
        const value = snapshot.val()
        const favorites = Object.entries(value || {}).map(([id, values]) => ({
            id,
            ...values
        }))

        dispatch(setFavorites(favorites))
    }

    favoritesRef.on('value', callback)
}

export const disableSync = () => dispatch => {
    favoritesRef.off('value', callback)
}


/*export const addProducts = (
    productId,
    productIdd,
    productName,
    productCategory
) => dispatch => {
    storagesRef.push({
        id: productId,
        name: productName,
        category: productCategory,
    })
}*/

export const addProducts = productId => dispatch => {
    favoritesRef.push(({
        id: productId
    }))
}

export const removeTask = taskId => dispatch => {
    favoritesRef.child(taskId).remove()
}

// Initial state
const initialState = {
    data: []
}


// Reducer
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_FAVORITES:
            return {
                ...state,
                data: action.favorites
            }

        case REMOVE:
            return {
                ...state,
                data: state.data.filter(favorite => favorite.id !== action.favoriteId)
            }

        default:
            return state
    }
}
