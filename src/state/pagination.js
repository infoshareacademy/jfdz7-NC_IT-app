const ACTIVATE_PAGINATION = 'pagination/ACTIVATE_PAGINATION'
const DEACTIVATE_PAGINATION = 'pagination/DEACTIVATE_PAGINATION'
const CHANGE_PAGE = 'pagination/CHANGE_PAGE'
const ONE_PAGE = 'pagination/ONE_PAGE'

export const activatePagination = () => ({
    type: ACTIVATE_PAGINATION,
})

export const deactivatePagination = () => ({
    type: DEACTIVATE_PAGINATION
})

export const onePage = () => ({
    type: ONE_PAGE
})

export const changePage = currentpageId => ({
    type: CHANGE_PAGE,
    currentpageId
})

const initialState = {
    currentPage: 1,
    productsPerPage: 5
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ACTIVATE_PAGINATION:
            return {
                currentPage: 1,
                productsPerPage: 5
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.currentpageId
            }
        case ONE_PAGE:
            return {
                currentPage: 1,
                productsPerPage: Number.POSITIVE_INFINITY
            }
        case DEACTIVATE_PAGINATION:
            return initialState
        default:
            return state
    }
}
