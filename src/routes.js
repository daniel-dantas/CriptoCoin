import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Importação das paginas
import Index from './pages/Index'
import Sobre from './pages/Sobre'
import Top5 from './pages/Top5'
import SearchMoeda from './pages/SearchMoeda'
import MoedasEmAlta from './pages/MoedasEmAlta'

const Routes = () => ( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=> <Index />} />
            <Route exact path="/sobre" component={ () => <Sobre/>} />
            <Route  exact path="/top5" component={() => <Top5/>} />
            <Route  exact path="/searchMoeda" component={() => <SearchMoeda/>} />
            <Route  exact path="/moedasEmAlta" component={() => <MoedasEmAlta/>} />
        </Switch>
    </BrowserRouter>
)

export default Routes