import React from 'react'

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
                                <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                                {props.links.map(link => (
                                    <li key={link.nome}><a className="grey-text text-lighten-3" href={link.caminho}>{link.nome}</a></li>
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