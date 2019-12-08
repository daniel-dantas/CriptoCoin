import React, {useEffect} from 'react'
import Moedas from '../../services/Moeda'

export default () => {

    useEffect(() => {
        loadMoedas()
    })
    
    const loadMoedas = () => {
        Moedas.read().then(response => {
            
            let moedas = response.data.data
            moedas.map(moeda => {
                console.log(moeda.name)
            })
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
            </center>
        </div>
    )
}

