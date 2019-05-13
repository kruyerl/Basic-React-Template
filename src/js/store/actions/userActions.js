import axios from 'axios'
import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    LOGIN_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
} from '../types'

export const loginUser = (userData, history) => dispatch => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/login', userData)
        .then(res => {
            const FbIdToken = `Bearer ${res.data.token}`
            localStorage.setItem('FbIdToken', FbIdToken)
            axios.defaults.headers.common.Authorization = FbIdToken
            dispatch({
                type: SET_AUTHENTICATED,
            })
            // dispatch(syncData)
            history.push('/today')
            Promise.resolve()
        })
        .catch(error => {
            dispatch({
                type: SET_ERRORS,
                payload: error.response.data,
            })
        })
}
export const signupUser = (userData, history) => dispatch => {
    dispatch({ type: LOADING_UI })
    axios
        .post('/signup', userData)
        .then(res => {
            const FbIdToken = `Bearer ${res.data.token}`
            localStorage.setItem('FbIdToken', FbIdToken)
            dispatch({
                type: SET_AUTHENTICATED,
            })
            // dispatch(syncData)
            history.push('/today')
            Promise.resolve()
        })
        .catch(error => {
            if (error.response) {
                dispatch({
                    type: SET_ERRORS,
                    payload: error.response.data,
                })
            }
        })
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('FbIdToken')
    delete axios.defaults.headers.common.Authorization
    window.location.href = '/'
    dispatch({
        type: SET_UNAUTHENTICATED,
    })
}
