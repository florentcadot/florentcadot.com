import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'pages/home'

const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            component={Home} />
    </Switch>
)

export default Routes
