import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import jwt from 'jsonwebtoken'
import Navbar from './components/navigation/Navbar'
import Auth from './components/layouts/Auth'
import LandingPage from './components/layouts/LandingPage'
import Dashboard from './components/layouts/Dashboard'
import NotFound from './components/layouts/NotFound'

function App() {
    if (localStorage.FbIdToken) {
        const token = localStorage.FbIdToken.split(' ')[1]
        const decodedToken = jwt.decode(token)
        console.log('decodedtoken ', decodedToken)
    }
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" exact component={Auth} />
                    <Route path="/landing" exact component={LandingPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}

export default App
