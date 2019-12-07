import React, {useEffect} from 'react'
import Moedas from '../../services/Moeda'

const  top5 =  () => {
    
    useEffect(() => {
        
        loadMoedas()
    })
    
    const loadMoedas = () => {
        Moedas.read().then(moedas => {
            moedas.map(moeda => {
                console.log(moeda.id)
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

export default top5