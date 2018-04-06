const ACTIVATE_PAGINATION = 'pagination/ACTIVATE_PAGINATION'
const DEACTIVATE_PAGINATION = 'pagination/DEACTIVATE_PAGINATION'
const CHANGE_PAGE = 'pagination/CHANGE_PAGE'

export const activatePagination = pagination => ({
    type: ACTIVATE_PAGINATION,
    pagination
})

export const deactivatePagination = () => ({
    type: DEACTIVATE_PAGINATION
})

export const changePage = currentpageId => ({
    type: CHANGE_PAGE,
    currentpageId
})

const initialState = {
    currentPage: 1,
    todosPerPage: 5
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ACTIVATE_PAGINATION:
            return {
                initialState
            }
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.currentpageId
            }
        case DEACTIVATE_PAGINATION:
            return initialState
        default:
            return state
    }
}
