function reducer(state = { value: 0 }, { type, payload }) {
    switch (type) {
        case 'ADD_VALUE': {
            const newValue = state.value + payload
            return {
                ...state,
                value: newValue,
            }
        }
        case 'SUBTRACT_VALUE': {
            const newValue = state.value - payload
            return {
                ...state,
                value: newValue,
            }
        }
        default:
            return state
    }
}
export default reducer
