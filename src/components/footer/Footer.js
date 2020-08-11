import React, { Component } from 'react';
import '../../../node_modules/jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import {Link} from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <section className="section teal darken-2 white-text center scrollspy">
                <div className="row">
                    <div className="col s12">
                        <h4>Follow Us</h4>
                        <p>
                            Check out our social media handels
                        </p>
                        <Link to="https://facebook.com" target="blank" className="white-text">
                            <i className="fa fa-facebook fa-3x"></i>
                        </Link>
                        <Link to="https://twitter.com" target="blank" className="white-text">
                            <i className="fa fa-twitter fa-3x"></i>
                        </Link>
                        <Link to="https://linkedin.com" target="blank" className="white-text">
                            <i className="fa fa-linkedin fa-3x"></i>
                        </Link>
                        <Link to="https://googleplus.com" target="blank" className="white-text">
                            <i className="fa fa-google-plus fa-3x"></i>
                        </Link>
                        <Link to="https://pinterest.com" target="blank" className="white-text">
                            <i className="fa fa-pinterest fa-3x"></i>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="fixed-action-btn">
                        <Link className="waves-effect btn-floating btn-large blue">
                            <i className="large material-icons">mode_edit</i>
                        </Link>
                        <ul>
                            <li><Link className="btn-floating red"><i class="material-icons">insert_chart</i></Link></li>
                            <li><Link className="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></Link></li>
                            <li><Link className="btn-floating green"><i class="material-icons">publish</i></Link></li>
                            <li><Link className="btn-floating blue"><i class="material-icons">attach_file</i></Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
