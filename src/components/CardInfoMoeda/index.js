import React from 'react'

let CardInfoMoeda = (props) => {

    return (
        <div id="cardInfoMoeda">
            <div className="row">
                <div className="col s12">
                    <div className="card grey darken-4">
                        <div className="card-content white-text">
                            <span className="card-title">
                                {props.moeda.name}
                                <div>{(props.moeda.changePercent24Hr < 0) ? (
                                    <i className="small material-icons">arrow_downward</i>
                                ) : (
                                    <i className="small material-icons">arrow_upward</i>
                                )}</div>
                                </span>
                            {/* A informação abaixo pode mudar*/}
                            <p> 
                                <br/>
                                Rank: {props.moeda.rank}
                                <br/>
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