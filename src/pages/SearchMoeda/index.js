import React, {useEffect, useState} from 'react'
import Container from '../../components/CardContainer'
import CardInfoMoeda from '../../components/CardInfoMoeda'

import Moedas from '../../services/Moeda'

export default () => {

    const [moedas, setMoedas] = useState([])

    useEffect(() => {
        Moedas.read().then(response => {
            let moedas = response.data.data
            setMoedas(moedas)
        })
    })

    return (
        <div id="searchMoeda">
            <center>
                <div className="row">
                    <div className="container">
                    <Container>
                            {moedas.map(moeda => (<CardInfoMoeda key={moeda.id} moeda={moeda}/>))}
                    </Container>
                    </div>
                </div>
            </center>
        </div>
    )
}