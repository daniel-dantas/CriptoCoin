import React,{useState, useEffect} from 'react'
import Moedas from '../../services/Moeda'

// Componentes
import CardLink from '../../components/CardLink'
import Carrousel from '../../components/Carrousel'

// Imagens
import searchImage from '../../assets/search.jpg'
import EmAltaImage from '../../assets/em_alta.jpg'
import Top5 from '../../assets/top_5.jpeg'



export default () => {


    const [moedaEmAlta, setMoedaEmAlta] = useState({titulo: 'TITULO 1', conteudo: 'CONTEUDO 2'})
    const [moedaEmBaixa, setMoedaEmBaixa] = useState({titulo: 'TITULO 2', conteudo: 'CONTEUDO 2'})


    useEffect(() => {
        loadMoedas()
    })

    const loadMoedas = async() => {
        await Moedas.read().then(response => {
           let moedas = response.data.data
           let moedaAlta = moedas.filter(moeda => {return moeda.changePercent24Hr > 0})[0]
           let moedaBaixa = moedas.filter(moeda => {return moeda.changePercent24Hr < 0})[0]

           setMoedaEmAlta({titulo: `${moedaAlta.name} está em alta`, conteudo: `${moedaAlta.name} teve um aumento de ${moedaEmAlta.changePercent24Hr} %`})
           setMoedaEmBaixa({titulo: `${moedaBaixa.name} está em baixa`, conteudo: `${moedaBaixa.name} teve uma queda de ${moedaEmBaixa.changePercent24Hr}`})
           console.log(moedaEmAlta)
           console.log(moedaEmBaixa)
       }).catch( erro => {
           console.log(erro)
       })
   }


    return (
        <div className="grey darken-3">
            {/* Carrousel */}
            <Carrousel imagem={searchImage} itens={[moedaEmAlta, moedaEmBaixa]}/>

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