import React from 'react'

const carrousel = (props) => {

    return (
        <div id="carrousel">
            <div className="slider">
                <ul className="slides">
                    {props.itens.map( item => {
                        return (
                            <li key={item.titulo}>
                                <img src={item.imagem}/>
                                <div className="caption center-align">
                                    <h3>{item.titulo}</h3>
                                    <h5 className="light grey-text text-lighten-3">
                                        {item.conteudo}
                                    </h5>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default carrousel