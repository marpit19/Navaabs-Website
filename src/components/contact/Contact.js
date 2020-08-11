import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" className="section section-contact scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card-panel teal white-text center">
                                <i className="material-icons">email</i>
                                <h5>NavaaBs Address</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adip sit amet, consectetur adip. Repelle sed diam eget diam eget</p>
                            </div>
                            <ul className="collection with-header">
                                <li className="collection-header">
                                    <h4>Location</h4>
                                </li>
                                <li className="collection-header">NavaaBs Booking</li>
                                <li className="collection-header"><i className="fas fa-map-marker-alt"></i> 123 MV Road Mumbai</li>
                                <li className="collection-header"><i className="fas fa-phone"> (+91) 31243923</i></li>
                                <li className="collection-header"><i className="fas fa-envelope-square"></i> book@navaabs.com</li>
                            </ul>
                        </div>
                        <div className="col s12 m6">
                            <div className="card-panel grey lighten-3">
                                <h5>Please fill out the form below</h5>
                                <form>
                                    <div className="input-field">
                                        <input type="text" id="name" className="validate" />
                                        <label for="name" className="teal-text">Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="email" className="validate" />
                                        <label for="email" className="teal-text">Email</label>
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="phone" className="validate" />
                                        <label for="phone" className="teal-text">Phone</label>
                                    </div>
                                    <div className="input-field">
                                        <textarea type="text" id="message" className="materialize-textarea" data-length="120"></textarea>
                                        <label for="message" className="teal-text">Message</label>
                                    </div>
                                    <input type="submit" value="Submit" className="btn teal" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </section>
        )
    }
}
