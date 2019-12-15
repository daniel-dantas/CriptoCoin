import React from 'react'
import Moedas from '../../services/Moeda'
import Container from '../../components/CardContainer'
import CardInfoMoeda from '../../components/CardInfoMoeda'

// Pagina mechendo com ciclo de vida de um componente

class Top5 extends React.Component{

    constructor(){
        super()
        this.state={
            moedas: []
        }
    }

    componentDidMount = () => {
        this.loadMoedas()
    }

    loadMoedas = () => {
        Moedas.read().then(response => {
            let moedas = response.data.data.slice(0, 5)
            this.setState({moedas: moedas})
        }).catch( erro => {
            console.log(erro)
        })
    }

    componentDidUpdate = () => {
        setInterval(this.loadMoedas(), 15000);
    }

    render(){
        return (
            <div id="top5">
                <center>
                    <div className="container">
                        <Container>
                            {this.state.moedas.map(moeda => (<CardInfoMoeda key={moeda.id} moeda={moeda}/>))}
                        </Container>
                    </div>
                </center>
        </div>
        )
    }

}

export default Top5

// export default () => {

//     const [moedas, setMoedas] = useState([])

//     useEffect(() => {
//         loadMoedas()
//     })
    
//     const loadMoedas = () => {
//         Moedas.read().then(response => {
//             let moedas = response.data.data.slice(0, 5)
//             setMoedas(moedas)
//         }).catch( erro => {
//             console.log(erro)
//         })
//     }
    
//     return (
//         <div id="top5">
//                 <center>
//                     <div className="container">
//                         <Container>
//                             {moedas.map(moeda => (<CardInfoMoeda key={moeda.id} moeda={moeda}/>))}
//                         </Container>
//                     </div>
//                 </center>
//         </div>
//     )
// }

