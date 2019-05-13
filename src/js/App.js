import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import jwt from 'jsonwebtoken'
import Navbar from './components/navigation/Navbar'
import Auth from './components/layouts/Auth'
import LandingPage from './components/layouts/LandingPage'
import Dashboard from './components/layouts/Dashboard'
import NotFound from './components/layouts/NotFound'
import { logoutUser } from './store/actions/userActions'
import { SET_AUTHENTICATED } from './store/types'
import AuthRoute from './utils/AuthRoute'

function App() {
    const dispatch = useDispatch()

    if (localStorage.FbIdToken) {
        const token = localStorage.FbIdToken.split(' ')[1]
        const decodedToken = jwt.decode(token)
        const tokenExp = decodedToken.exp * 1000

        if (tokenExp > Date.now()) {
            dispatch({ type: SET_AUTHENTICATED })
        }
        if (tokenExp < Date.now()) {
            dispatch(logoutUser())
            window.location.href = '/'
        }
    }

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/login" exact component={Auth} />
                    <AuthRoute path="/today" exact component={Dashboard} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}

export default App
