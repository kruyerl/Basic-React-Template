import axios from 'axios'
import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, LOGIN_USER } from '../types'

export const loginUser = (userData, history) => dispatch => {
    // dispatch({ type: LOADING_UI })
    axios
        .post('/login', userData)
        .then(res => {
            localStorage.setItem('FbIdToken', `Bearer ${res.data.token}`)
            return res
        })
        .then(res => {
            // console.log(res.data)
            history.push('/')
            Promise.resolve()
        })
        .catch(error => {
            if (error.response) {
                // dispatch error
            }
        })
}

export const getUserData = userData => dispatch => {
    axios
        .post('/user', userData)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.warn(err)
        })
}
