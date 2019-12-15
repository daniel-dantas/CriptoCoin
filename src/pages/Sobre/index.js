import React from 'react'
import Container from '../../components/CardContainer'
const sobre = (props) => {
    
    return (
        <div id="sobre">
            <div className="row">
                <div className="container">
                    <Container isCard={true}>
                        <h5>Cripto Coin</h5>
                        <br/>
                        
                        <p>
                            Monitorar os movimentos de valorização e queda das criptomoedas, de forma fácil e prática, é sem dúvida uma necessidade para os 
                            investidores do mercado de ativos digitais. E isso é ainda mais premente para os traders, que buscam altos índices de valorização em 
                            curtos espaços de tempo.
                        </p>
                        <p>
                            De olho em atender características desses usuários de perfil altamente conectado, o mercado de aplicativos se mobiliza e lança funcionalidades 
                            específicas. É o caso do cripto coin que é uma ideia na qual o permite que o usuario possa ver informações sobre as
                            inumeras cripto moedas em tempo real, sabendo quando houve alta e quando houve baixa. Com esse o nosso site 
                            o usuario também poderá verificar a informação de determinada moeda apenas digitando o seu nome.
                        </p>
                        <div className="infoDev">
                            <p>
                                Desenvolvido por <a href="https://github.com/daniel-dantas">Daniel Dantas</a>
                            </p>
                            <p>
                                Site desenvolvido com <a href="https://pt-br.reactjs.org">REACTJS</a>
                            </p>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default sobre