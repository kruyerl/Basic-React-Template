import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Section from './components/Section'

const NotFound = () => <h3>NotFound</h3>

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Section} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    )
}

export default App
