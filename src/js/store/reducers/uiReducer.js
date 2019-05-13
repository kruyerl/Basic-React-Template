import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types'

const initialUiState = {
    errors: {},
    loading: false,
}

const uiReducer = (state = initialUiState, action) => {
    switch (action.type) {
        case SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: {},
            }
        case LOADING_UI:
            return {
                ...state,
                loading: true,
            }

        default:
            return state
    }
}
export default uiReducer
