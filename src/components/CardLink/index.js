import React from 'react'


const cardlink = (props) => {
    return (
        <div id="cardlink">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src={props.imagem}/>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">call_made</i></a>

                        </div>
                        <div className="card-content"> 
                            <span className="card-title">{props.titulo}</span>
                            <p>{props.informacoes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardlink