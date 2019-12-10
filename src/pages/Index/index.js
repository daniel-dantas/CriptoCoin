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
            
            itens: [
                {titulo: 'TITULO', conteudo: 'CONTEUDO'}
            ],
            imagem: searchImage
            
        }
    }

    componentDidMount(){
        this.filtrandoMoedas()
    }


    async filtrandoMoedas(){
        await Moedas.read().then(response => {
            let moedaEmAlta = response.data.data.filter(moeda => {return moeda.changePercent24Hr > 0})[0]
            let moedaEmBaixa = response.data.data.filter(moeda => {return moeda.changePercent24Hr < 0})[0]
            
            this.setState({
                itens: [
                    {titulo: moedaEmAlta.name+' está em alta', conteudo: moedaEmAlta.name+' teve uma alta de '+moedaEmAlta.changePercent24Hr+'%'},
                    {titulo: moedaEmBaixa.name+' está em baixa', conteudo: moedaEmAlta.name+' teve uma baixa de '+moedaEmBaixa.changePercent24Hr+'%'}
                ]
            })
        }).catch( erro => {
            console.log(erro)
        })
    }


    render(){
        return (
            <div className="grey darken-3">
                {/* Carrousel */}
                

                <Carrousel imagem={this.state.imagem} itens={this.state.itens}/>

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