import React, {useState} from 'react';
import Routes from './routes'
import NavBar from './components/NavBar'
import Logo from './assets/logo.png'
const App = () => {

    const [links] = useState([
        {caminho: '#', nome: 'Sobre'}
    ])

    return (
        <div id="app">
            <NavBar urlLogo={Logo} links={links}/>
            <Routes />
        </div>
    )
    
}

export default App;
