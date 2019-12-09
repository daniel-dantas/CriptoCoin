import React from 'react'
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
                {imagem: searchImage, titulo: 'TITULO', conteudo: 'CONTEUDO'}
            ]
        }
    }

    render(){
        return (
            <div className="grey darken-3">
                {/* Carrousel */}
                
                <Carrousel itens={this.state.itens}/>

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