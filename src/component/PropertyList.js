import React from 'react';
import Property from './Property'
import Footer from '../component/FooterPage';
import { Link } from 'react-router-dom';
// import Pdf_property from './Pdf_property'
export default function PropertyList({ rooms }) {


    return (
        <section data-aos="fade-up" className="property-gallery-wrapper">
            <h1 className="gallery-title">Nasa <span>Ponuda</span> </h1>
            <div className="gallery">
                {rooms.map(item => {
                    return <Property key={item.id} room={item} />
                })}
            </div>
            {/* <Pdf_property /> */}
            <Footer />
        </section>
    );
}
