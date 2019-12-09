import React, {useEffect, useState} from 'react'
import Moedas from '../../services/Moeda'
import CardContainer from '../../components/CardContainer'


export default () => {

    const [moedas, setMoedas] = useState([])

    useEffect(() => {
        loadMoedas()
    })
    
    const loadMoedas = () => {
        Moedas.read().then(response => {
            let moedas = response.data.data.slice(0, 5)
            setMoedas({moedas: moedas})
        }).catch( erro => {
            console.log(erro)
        })
    }
    
    return (
        <div id="top5">
            <center>
                <h1>
                    Top 5
                </h1>
                <div className="container">
                    dasds
                    <CardContainer moedas={moedas}/>
                </div>
            </center>
        </div>
    )
}

