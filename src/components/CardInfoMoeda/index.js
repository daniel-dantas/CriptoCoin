import React from 'react'



export default (props) => {




    return (
        <div id="cardInfoMoeda">
            <div className="row">
                <div className="col s12">
                    <div className="card grey darken-4">
                        <div className="card-content white-text">
                                
                                <span className="card-title">{(props.moeda.changePercent24Hr < 0) ? (
                                    
                                        <h5 className="red-text"> 
                                            {props.moeda.name} 
                                            <i className="material-icons">arrow_downward</i>
                                        </h5>
                                    
                                ) : (
                                    
                                        <h5 className="green-text">
                                            {props.moeda.name}
                                            <i className="material-icons green">arrow_upward</i>
                                        </h5>
                                    
                                )}</span>
                            
                            {/* A informação abaixo pode mudar*/}
                            <p> 
                                <br/>
                                Rank: {props.moeda.rank}
                                <br/>
                                Preço: ${props.moeda.priceUsd}
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}