import React, {useState} from 'react';
import Routes from './routes'
import NavBar from './components/NavBar'
import Logo from './assets/logo.png'
import Footer from './components/Footer'

const App = () => {

    const [links] = useState([
        {caminho: '/searchMoeda', nome: 'Pesquisar Moeda'},
        {caminho: '/sobre', nome: 'Sobre'},
    ])

    const [infFooter] = useState({
        titulo: 'Titulo',
        descricao: 'descricao aqui',
        copy: 'Cripto Moedas'
    })


    return (
        <div id="app" className="grey darken-2">
            <NavBar urlLogo={Logo} links={links}/>
            <Routes />
            <Footer 
                titulo={infFooter.titulo}
                descricao={infFooter.descricao}
                links={links}
                copy={infFooter.copy}
            />
        </div>
    )
    
}

export default App;
