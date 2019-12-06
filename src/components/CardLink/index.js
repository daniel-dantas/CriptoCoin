import React from 'react'
import './style.css'

const cardlink = (props) => {

    return (
        <div id="cardlink">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img id="imagem-link" src={props.imagem}/>
                            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">call_made</i></a>

                        </div>
                        <div className="card-content grey darken-4"> 
                            <span className="card-title white-text">{props.titulo}</span>
                            <p className="white-text">{props.informacoes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardlink