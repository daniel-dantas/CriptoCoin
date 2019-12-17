import React, {useState} from 'react';
import Routes from './routes'
import NavBar from './components/NavBar'
import Logo from './assets/logo.png'
import Footer from './components/Footer'

const App = () => {

    const [links] = useState([
        {caminho: '/top5', nome: 'Top 5'},
        {caminho: '/moedasEmAlta', nome: 'Moedas Em Alta'},
        {caminho: '/searchMoeda', nome: 'Pesquisar Moeda'},
        {caminho: '/sobre', nome: 'Sobre'},
    ])

    const [infFooter] = useState({
        titulo: 'CriptoCoin',
        descricao: ' O cripto coin é uma ideia na qual o permite que o usuario possa ver informações sobre as inumeras cripto moedas em tempo real, sabendo quando houve alta e quando houve baixa.',
        copy: 'Cripto Coin'
    })


    return (
        <div id="app" className="grey darken-3">
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
