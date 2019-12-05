import React from 'react'
import CardLink from '../../components/CardLink'
import Carrousel from '../../components/Carrousel'

class Index extends React.Component{

    constructor(){
        super()
        this.state = {
            itens: [
                {imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafNqwG0QMv8BdaCQv8s0rWeGzVOeRmyzMVac3WNiRDIBU7azF', titulo: 'TITULO', conteudo: 'CONTEUDO'}
            ]
        }
    }

    render(){
        return (
            <div>
                {/* Carrousel */}
                
                {/* <Carrousel itens={this.state.itens}/> */}

                {/* Lista CardsLinks */}
                {/* <div className="row">
                    <div className="col s12 m4">
                        <CardLink imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafNqwG0QMv8BdaCQv8s0rWeGzVOeRmyzMVac3WNiRDIBU7azF" titulo="Top 5" informacao=""/>
                    </div>
                    <div className="col s12 m4">
                        <CardLink imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafNqwG0QMv8BdaCQv8s0rWeGzVOeRmyzMVac3WNiRDIBU7azF" titulo="Pesquisar Moeda" informacao=""/>
                    </div>
                    <div className="col s12 m4">
                        <CardLink imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSafNqwG0QMv8BdaCQv8s0rWeGzVOeRmyzMVac3WNiRDIBU7azF" titulo="Moedas em alta" informacao=""/>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Index