import React from 'react'
import Moedas from '../../services/Moeda'

// Componentes
import CardLink from '../../components/CardLink'
import Carrousel from '../../components/Carrousel'

// Imagens
import searchImage from '../../assets/search.jpg'
import EmAltaImage from '../../assets/em_alta.jpg'
import Top5 from '../../assets/top_5.jpeg'
class Index extends React.Component{

    constructor(){
        super()
        this.state = {
            moedaEmAlta: {titulo: 'TITULO 1', conteudo: 'CONTEUDO 2'},
            moedaEmBaixa: {titulo: 'TITULO 2', conteudo: 'CONTEUDO 2'},
            imagem: searchImage
        }
    }

    componentDidMount = () => {
        Moedas.read().then(response => {
            let moedas = response.data.data
            let moedaEmAlta = moedas.filter(moeda => {return moeda.changePercent24Hr > 0})[0]
            let moedaEmBaixa = moedas.filter(moeda => {return moeda.changePercent24Hr < 0})[0]
            
            this.setState({
                moedaEmAlta: {titulo: `${moedaEmAlta.name} está em alta`, conteudo: `${moedaEmAlta.name} teve um aumento de ${moedaEmAlta.changePercent24Hr} %`},
                moedaEmBaixa: {titulo: `${moedaEmBaixa.name} está em baixa`, conteudo: `${moedaEmBaixa.name} teve uma queda de ${moedaEmBaixa.changePercent24Hr}%`}
            })
        }).catch( erro => {
            console.log(erro)
        })
    }


    // filtrandoMoedas = () => {
        
    // }


    render(){
        return (
            <div className="grey darken-3">
                {/* Carrousel */}
                <Carrousel imagem={this.state.imagem} itens={[this.state.moedaEmAlta,this.state.moedaEmBaixa]}/>

                {/* Lista CardsLinks */}

                <div className="row">
                    <div className="col s12 m4">
                        <CardLink imagem={Top5} titulo="Top 5" informacao="" link="/top5"/>
                    </div>
                    <div className="col s12 m4">
                        <CardLink imagem={searchImage} titulo="Pesquisar Moeda" informacao="" link="/searchMoeda"/>
                    </div>
                    <div className="col s12 m4">
                        <CardLink imagem={EmAltaImage} titulo="Moedas em alta" informacao="" link="/moedasEmAlta"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index