import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Booking.css';

export default class Booking extends Component {
    render() {
        return (
            <section className="section section-book teal darken-2 white-text center">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            <a href="!#" className="btn btn-large waves-effect white teal-text text-darken-3">
                                <i className="material-icons left">add_shopping_cart</i> Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
