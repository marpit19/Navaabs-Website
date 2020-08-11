import React, { Component } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <section id="search" className="section section-search blue-grey darken-4 white-text center scrollspy">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="input-field">
                                <input className="white grey-text autocomplete" placeholder="Search for your favorite food, cusines, etc" type="text" id="autocomplete-input"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
