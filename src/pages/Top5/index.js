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
            setMoedas(moedas)
        }).catch( erro => {
            console.log(erro)
        })
    }
    
    return (
        <div id="top5">
            <center>
                <div className="container">
                    <CardContainer moedas={moedas}/>
                </div>
            </center>
        </div>
    )
}

