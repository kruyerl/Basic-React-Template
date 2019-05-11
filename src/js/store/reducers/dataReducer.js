const initialDataState = {
    endpointBase: 'https://us-central1-intently-9f8b1.cloudfunctions.net/api/',
}

const dataReducer = (state = initialDataState, action) => {
    switch (action.type) {
        case 'value':
            return state

        default:
            return state
    }
}

export default dataReducer
