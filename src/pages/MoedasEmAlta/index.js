import React, {useState, useEffect} from 'react'
import Moedas from '../../services/Moeda'
import Container from '../../components/CardContainer'
import CardInfoMoeda from '../../components/CardInfoMoeda'
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
                        <Container>
                            {moedas.map(moeda => (<CardInfoMoeda key={moeda.id} moeda={moeda}/>))}
                        </Container>
                    </div>
                </div>
            </center>
        </div>
    )
}