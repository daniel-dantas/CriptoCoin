/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


export default (props) => {

    return (
        <div id="carrousel">
            <div className="slider">
                <ul className="slides">
                    {props.itens.map( item => (
                            <li key={item.titulo}>
                                <img src={props.imagem}/>
                                <div className="caption center-align">
                                    <h3>{item.titulo}</h3>
                                    <h5 className="light grey-text text-lighten-3">
                                        {item.conteudo}
                                    </h5>
                                </div>
                            </li>
                        )
                    )}
                    
                </ul>
            </div>
        </div>
    )
}