import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import Imgone from '../../images/banner8.jpg';
import Imgtwo from '../../images/banner7.jpg';
import Imgthree from '../../images/banner6.jpg';
import {Link} from 'react-router-dom';
import './Banner.css';

export default class Banner extends Component {
    render() {
        return (
            <section className="slider" id="home">
                <ul className="slides">
                    <li>
                        <img src={Imgone} alt="food1" />
                        <div className="caption center-align">
                            <h2 className="cyan-text text-accent-1">Pick your favorite Food</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam non illo earum cumque id est!
                            </h5>
                            <Link to="#" className="btn btn-large teal">Learn More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgtwo} alt="food2" />
                        <div className="caption right-align">
                            <h2 className="cyan-text text-accent-1">Order your favorite Food</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam non illo earum cumque id est!
                            </h5>
                            <Link to="#" className="btn btn-large teal">Learn More</Link>
                        </div>
                    </li>
                    <li>
                        <img src={Imgthree} alt="food3" />
                        <div className="caption left-align">
                            <h2 className="cyan-text text-accent-1">Relax and Enjoy your food</h2>
                            <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam non illo earum cumque id est!
                            </h5>
                            <Link to="#" className="btn btn-large teal">Learn More</Link>
                        </div>
                    </li>
                </ul>           
            </section>
        )
    }
}
