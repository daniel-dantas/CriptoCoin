import React from 'react'
import CardInfoMoeda from '../CardInfoMoeda'


let card = (props) => {

    return (
        <div id="card">
            <div className="row">
                <div className="col s12">
                    {props.moedas.map(moeda => (<CardInfoMoeda key={moeda.id} moeda={moeda}/>))}
                </div>
            </div>
        </div>
    )
}

export default card