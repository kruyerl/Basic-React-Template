import axios from 'axios'
import { SET_USER, SET_ERRORS, LOADING_UI, LOGIN_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../types'

const initialUserState = {
    authenticated: false,
    credentials: {},
    signInForm: {
        email: '',
        password: '',
    },
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATED: {
            const FbIdToken = `Bearer ${localStorage.getItem('FbIdToken')}`
            axios.defaults.headers.common.Authorization = FbIdToken
            return {
                ...state,
                authenticated: true,
            }
        }
        case SET_UNAUTHENTICATED:
            localStorage.removeItem('FbIdToken')
            delete axios.defaults.headers.common.Authorization
            return {
                ...state,
                authenticated: false,
            }

        default:
            return state
    }
}

export default userReducer
