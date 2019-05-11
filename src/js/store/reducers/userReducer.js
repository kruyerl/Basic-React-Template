const initialUserState = {
    authenticated: false,
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                authenticated: true,
            }

        default:
            return state
    }
}

export default userReducer
