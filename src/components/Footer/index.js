import React from 'react'
import {Link} from 'react-router-dom'
const footer = (props) => {

    return (
        <div id="footer">
            <footer className="page-footer grey darken-4">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">{props.titulo}</h5>
                            <p>{props.descricao}</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><Link className="grey-text text-lighten-3" to="/">Home</Link></li>
                                {props.links.map(link => (
                                    <li key={link.nome}><Link className="grey-text text-lighten-3" to={link.caminho}>{link.nome}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <center>&copy;{props.copy}</center>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer