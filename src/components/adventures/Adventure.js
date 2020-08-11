import React, { Component } from 'react';
import img1 from '../../images/banner1.jpg';
import img2 from '../../images/banner2.jpg';
import img3 from '../../images/banner3.jpg';
import {HashLink as Link} from 'react-router-hash-link';

export default class Adventure extends Component {
    render() {
        return (
            <section id="special" className="section section-adventure scrollspy">
                <div className="container">
                    <div className="row">
                        <h4 className="center">
                            <span className="teal-text darken-1">NavaaBs</span> Specials
                        </h4>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={img1} alt="food1" />
                                    <span className="card-title">Oumoru Rice</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light teal"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Quidem velit.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Oumoru Rice<i className="material-icons right">close</i></span>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Quidem velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={img2} alt="food2" />
                                    <span className="card-title">Chef's Special Pizza</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light teal"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Quidem velit.</p>
                                </div>
                                <div className="card-reveal">
                                    <span span className = "card-title grey-text text-darken-4" >Chef 's Special Pizza<i className="material-icons right">close</i></span>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Quidem velit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m4">
                            <div className="card">
                                <div className="card-image">
                                    <img src={img3} alt="food3" />
                                    <span className="card-title">Tandoori Chicken</span>
                                    <Link className="btn-floating activator halfway-fab waves-effect waves-light teal"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Quidem velit.</p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Tandoori Chicken<i className="material-icons right">close</i></span>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit. Quidem velit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}