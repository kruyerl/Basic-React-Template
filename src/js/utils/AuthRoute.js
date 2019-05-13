import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const AuthRoute = ({ component: Component, ...rest }) => {
    const appState = useSelector(redux => redux)
    const Auth = appState.user.authenticated
    return <Route {...rest} render={props => (Auth === false ? <Redirect to="/" /> : <Component {...props} />)} />
}

export default AuthRoute
