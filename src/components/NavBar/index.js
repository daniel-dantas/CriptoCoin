import React from 'react'
import './style.css'

const NavBar = (props) => {
    return (
        <div id="nav">
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <div className="row">
                        <div className="col s12 m2 center">
                            <a  href="/" className="brand-logo"><img id="logo"  src={props.urlLogo}/></a>
                        </div>
                        <div className="col s12 m10">
                            <a href="#" id="nav-mobile" data-target="mobile-demo"  className="sidenav-trigger menu"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/">Pagina Inicial</a></li>
                                {props.links.map( link => (<li key={link.nome}><a href={link.caminho}>{link.nome}</a></li>))}
                            </ul>
                        </div>
                        <ul className="sidenav grey darken-3" id="mobile-demo">
                            <li ><a className="white-text" href="/">Pagina Inicial</a></li>
                            {props.links.map( link => (<li key={link.nome}><a className="white-text" href={link.caminho}>{link.nome}</a></li>))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar