import React, {useEffect, useState} from 'react'
import Container from '../../components/CardContainer'
import CardInfoMoeda from '../../components/CardInfoMoeda'

import Moedas from '../../services/Moeda'

export default () => {

    const [moedas, setMoedas] = useState([])
    const [moedaSearch, setMoedaSearch] = useState('')

    useEffect(() => {
        Moedas.read().then(response => {
            let moedas = response.data.data
            setMoedas(moedas)
        })
    })

    const getPesq = (event) => {
        setMoedas(moedas.filter(moeda => {return moeda.name.startsWith(moedaSearch)}))
    }

    return (
        <div id="searchMoeda">
            <center>
                <div className="row">
                    <div className="container">
                        <Container>
                            <div className="input-field">
                                <i className="material-icons prefix white-text">search</i>
                                <input id="icon_prefix" className="white-text" onChange={getPesq} type="text" />
                                <label htmlFor="icon_prefix" className="white-text">Pesquisar Moeda</label>
                            </div>
                            {moedas.map(moeda => (<CardInfoMoeda key={moeda.id} moeda={moeda}/>))}
                        </Container>
                    </div>
                </div>
            </center>
        </div>
    )
}