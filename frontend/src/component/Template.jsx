import React, { Component } from 'react'
import Menu from './Menu'

import imgLogo from '../assets/logo/logo-reactify-full-white.png'

export default class Template extends Component {

    activeMenu = (menuItem) => {
        return this.props.activeMenu === menuItem ? 'active' : ''
    }

    render() {
        return (
            <div className="mi-wrapper">
                
                <nav className="mi-header">
                    <Menu />
                    <div className="mi-header-inner">
                        <div className="mi-header-profile">
                            contato@rectify.com
                        </div>
                        <ul className="mi-header-menu">
                            <li>
                                <a aria-current="page" className={this.activeMenu('home')} href="/#/home">
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#/songs" className={this.activeMenu('songs')}><span>Minhas músicas favoritas</span></a>
                            </li>
                            <li>
                                <a href="/#/albums" className={this.activeMenu('albums')}><span>Meus álbuns favoritos</span></a>
                            </li>
                            <li>
                                <a href="/#/artists" className={this.activeMenu('artists')}><span>Meus artistas favoritos</span></a>
                            </li>
                            <li>
                                <a href="/#/playlists" className={this.activeMenu('playlists')}><span>Minhas playlists favoritas</span></a>
                            </li>
                        </ul>
                        <p className="mi-header-copyright">
                            <img src={imgLogo} width={130} bottom={0} alt="Logo reactify"/>
                        </p>
                    </div>
                </nav>
                <div className="mi-home-area mi-padding-section">
                    
                    <div className="mi-home-particle content-bg">
                    
                        <div className="container my-padding-top mb-5">
                            { this.props.children }
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}