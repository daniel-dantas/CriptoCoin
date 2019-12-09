import React from 'react'

let CardInfoMoeda = (props) => {

    return (
        <div id="cardInfoMoeda">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{props.moeda.name}</span>
                            {/* A informação abaixo pode mudar*/}
                            <p>
                                Aqui vai ficar a situação se o preço da ação caiu ou diminuiu
                                <br/>
                                Rank: {props.moeda.rank}
                                Preço: R${props.moeda.priceUsd}
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardInfoMoeda