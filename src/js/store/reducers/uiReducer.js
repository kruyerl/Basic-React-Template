const initialUiState = {}

const uiReducer = (state = initialUiState, action) => {
    switch (action.type) {
        case 'value':
            return state

        default:
            return state
    }
}
export default uiReducer
