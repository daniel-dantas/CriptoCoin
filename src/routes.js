import React from 'react'
import Index from './pages/Index'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=> <Index />}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes