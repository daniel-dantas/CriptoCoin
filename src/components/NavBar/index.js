/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const NavBar = (props) => {
    return (
        <div id="nav">
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <div className="row">
                        <div className="col s12 m2 center">
                            <a  to="/" className="brand-logo"><img id="logo"  src={props.urlLogo}/></a>
                        </div>
                        <div className="col s12 m10">
                            <a to="#" id="nav-mobile" data-target="mobile-demo"  className="sidenav-trigger menu"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                
                                <li><Link to='/'>Pagina Inicial</Link></li>
                                {props.links.map( link => (<li key={link.nome}><Link to={link.caminho}>{link.nome}</Link></li>))}
                                
                            </ul>
                        </div>
                        <ul className="sidenav grey darken-3" id="mobile-demo">
                                <li ><Link className="white-text" to="/">Pagina Inicial</Link></li>
                                {props.links.map( link => (<li key={link.nome}><Link className="white-text" to={link.caminho}>{link.nome}</Link></li>))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar