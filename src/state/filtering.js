const ACTIVATE_FILTER = 'filtering/ACTIVATE_FILTER'
const DEACTIVATE_FILTER = 'filtering/DEACTIVATE_FILTER'
const ACTIVATE_SEARCH = 'filtering/ACTIVATE_FILTER'
const DEACTIVATE_SEARCH = 'filtering/DEACTIVATE_FILTER'

export const activateFilter = (searchValue,filterName) => ({
    type: ACTIVATE_FILTER,
    searchValue,
    filterName
})

export const deactivateSearch = () => ({
    type: DEACTIVATE_SEARCH
})

export const deactivateFilter = () => ({
    type: DEACTIVATE_FILTER
})

const initialState = {
    activeFilterNames: [],
    searchBar: ''
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ACTIVATE_FILTER:
            return {
                ...state,
                searchBar: action.searchValue,
                activeFilterNames: state.activeFilterNames.includes(action.filterName)
                    ? state.activeFilterNames
                    : state.activeFilterNames.concat(action.filterName)
            }
        case DEACTIVATE_FILTER:
            return initialState
        case ACTIVATE_SEARCH:
            return {
                ...state,
            }
        case DEACTIVATE_SEARCH:
            return initialState
        default:
            return state
    }
}
