import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Gallary.css';
import one from '../../images/1.jpg';
import two from '../../images/12.jpg';
import three from '../../images/12.jpg';
import four from '../../images/4.jpg';
import five from '../../images/10.jpg';
import six from '../../images/10.jpg';
import seven from '../../images/10.jpg';
import eight from '../../images/10.jpg';
import nine from '../../images/1.jpg';
import ten from '../../images/1.jpg';
import eleven from '../../images/11.jpg';
import twelve from '../../images/12.jpg';

const Photo = ({img, alt}) => {
    return(
        <div className="col s12 m3 marg">
            <img className="materialboxed responsive-img" src={img} alt={alt} height={1600} width={400} />
        </div>
    );
}

class PhotoGallery extends Component {

    state = {
        photo: [
            {
                id:1,
                img: one,
                alt: "one"
            },
            {
                id:2,
                img: two,
                alt: "two"
            },
            {
                id:3,
                img: three,
                alt: "three"
            },
            {
                id:4,
                img: four,
                alt: "four"
            },
            {
                id:5,
                img: five,
                alt: "five"
            },
            {
                id:6,
                img: six,
                alt: "six"
            },
            {
                id:7,
                img: seven,
                alt: "seven"
            },
            {
                id:8,
                img: eight,
                alt: "eight"
            },
            {
                id:9,
                img: nine,
                alt: "nine"
            },
            {
                id:10,
                img: ten,
                alt: "ten"
            },
            {
                id:11,
                img: eleven,
                alt: "eleven"
            },
            {
                id:12,
                img: twelve,
                alt: "twelve"
            },
        ]
    }

    render() {
        return (
            <duv className="row">
                {this.state.photo.map(gal => (
                    <Photo key={gal.id}
                    img={gal.img} alt={gal.alt} />
                ))}
            </duv>
        );
    }
}

export default class Gallary extends Component {
    render() {
        return (
            <section id="gallery" className="section section-gallery scrollspy">
                <div className="container">
                    <h4 className="center">
                        <span className="teal-text text-darken-1">Photo</span> Gallery
                    </h4>
                    <PhotoGallery />
                </div>                
            </section>
        );
    }
}
