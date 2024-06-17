import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'pages/home'
import About from 'pages/about'

const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            component={Home} />
        <Route
            exact
            path="/about"
            component={About} />
    </Switch>
)

export default Routes
