import React, { Component } from 'react'

import Button from '@material-ui/core/Button';

import imgPageNotFound from '../../assets/background/pagenotfound.png'

export default class PageNotFound extends Component {
    render() {
        return (
            <div className="mi-wrappers">
                
            <div className="mi-home-area mi-padding-section">
                
                <div className="mi-home-particle content-bg"></div>
                
                <div className="row justify-content-center">
                        <img src={imgPageNotFound} alt="Page not found" />
                    <div className="col-lg-10 col-12">
                        <div className="mi-home-content">
                            <ul className="mi-socialicons">
                                <li className="gray-color">
                                    <Button size="medium" variant="contained" color="secondary" href="/#/">Volte ao ínicio</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}