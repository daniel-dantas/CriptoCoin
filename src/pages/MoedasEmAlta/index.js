import React, {useState, useEffect} from 'react'
import Moedas from '../../services/Moeda'
import Container from '../../components/CardContainer'
// Moedas em alta
export default  () => {
    
    const [moedas, setMoedas] = useState([])
    
    useEffect(() => {
        loadMoedas()
    })

    const loadMoedas = () => {
        Moedas.read().then(response => {
            let moedas = response.data.data.filter(moeda => {return moeda.changePercent24Hr > 0})
            setMoedas(moedas)
        }).catch( erro => {
            console.log(erro)
        })
    }

    return (
        <div id="moedasEmAlta">
            <center>
                <div className="row">
                    <div className="container">
                        <Container moedas={moedas}/>
                    </div>
                </div>
            </center>
        </div>
    )
}