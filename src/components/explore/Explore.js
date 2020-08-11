import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Explore.css';

export default class Explore extends Component {
    render() {
        return (
            <section id="explore" className="section section-icons grey lighten-4 center">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="teal-text darken-1">Explore</span> NavaaBs
                        </h4>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium teal-text">restaurant</i>
                                <h4>Restaurant</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam non illo earum cumque id est!</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium teal-text">fastfood</i>
                                <h4>Fast Food</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam non illo earum cumque id est!</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium teal-text">local_cafe</i>
                                <h4>Cafe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam non illo earum cumque id est!</p>
                            </div>
                        </div>
                        <div className="col s6 m3">
                            <div className="card-panel">
                                <i className="material-icons medium teal-text">local_bar</i>
                                <h4>Bar</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam non illo earum cumque id est!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
