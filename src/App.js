import React, {useState} from 'react';
import Routes from './routes'
import NavBar from './components/NavBar'

const App = () => {

    const [links] = useState([
        {caminho: '#', nome: 'Sobre'}
    ])

    return (
        <div id="app">
            <NavBar urlLogo="./assets/logo.png" links={links}/>
            <Routes />
        </div>
    )
    
}

export default App;
