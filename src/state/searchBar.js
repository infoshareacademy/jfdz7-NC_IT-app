const ACTIVATE_SEARCH = 'filtering/ACTIVATE_FILTER'
const DEACTIVATE_SEARCH = 'filtering/DEACTIVATE_FILTER'

export const activateSearch = searchValue => ({
    type: ACTIVATE_SEARCH,
    searchValue
})

export const deactivateSearch = () => ({
    type: DEACTIVATE_SEARCH
})

const initialState = {
    searchBar: ''
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ACTIVATE_SEARCH:
            return {
                ...state,
                searchBar: action.searchValue
            }
        case DEACTIVATE_SEARCH:
            return initialState
        default:
            return state
    }
}
