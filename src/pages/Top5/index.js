import React, {useEffect, useState} from 'react'
import Moedas from '../../services/Moeda'
import Container from '../../components/CardContainer'
import CardInfoMoeda from '../../components/CardInfoMoeda'


export default () => {

    const [moedas, setMoedas] = useState([])

    useEffect(() => {
        loadMoedas()
    })
    
    const loadMoedas = () => {
        Moedas.read().then(response => {
            let moedas = response.data.data.slice(0, 5)
            setMoedas(moedas)
        }).catch( erro => {
            console.log(erro)
        })
    }
    
    return (
        <div id="top5">
                <center>
                    <div className="container">
                        <Container>
                            {moedas.map(moeda => (<CardInfoMoeda key={moeda.id} moeda={moeda}/>))}
                        </Container>
                    </div>
                </center>
        </div>
    )
}

