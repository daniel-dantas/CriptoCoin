import React, {useEffect, useState} from 'react'
import Container from '../../components/CardContainer'
import CardInfoMoeda from '../../components/CardInfoMoeda'

import Moedas from '../../services/Moeda'

export default () => {

    const [moedas, setMoedas] = useState([])
    const [moedaSearch, setMoedaSearch] = useState('')

    useEffect(() => {
        Moedas.read().then(response => {

            let responseMoedas = response.data.data
            if(moedaSearch === ''){
                setMoedas(responseMoedas)
            }else{
                setMoedas(responseMoedas.filter(moeda => {return moeda.name.startsWith(moedaSearch) || moeda.id.startsWith(moedaSearch)}))
            }

        })
    })

    const getPesq = (event) => {
        setMoedaSearch(event.target.value)
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