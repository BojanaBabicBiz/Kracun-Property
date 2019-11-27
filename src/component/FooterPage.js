import React from 'react';
import { IoIosPin, IoIosPhonePortrait } from 'react-icons/io'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaCaretRight } from 'react-icons/fa'

export default function FooterPage() {
    return (
        <div>
            <div id="contact" className="footer">
                <div className="contact" data-aos="fade-right">
                    <h1 className="contact-title">
                        Kontakt
                </h1>
                    <ul>
                        <li><IoIosPin /> Sv.Markovica 12 Kovin</li>
                        <li><IoIosPin /> Dr. Jovana Cvijica 18</li>

                        <li><IoIosPhonePortrait /> 069/ 3294199</li>
                        <a className="show-all-btn" href={"mailto:kracunus@yahoo.com"}>kracunus@yahoo.com</a>
                        <li>Broj u registru posrednika 960</li>


                    </ul>
                </div>

                <div className="our-promises" data-aos="fade-down">
                    <h1 className="promises-title">Agencija Kračun</h1>
                    <ul>
                        <li><FaCaretRight /> Naš tim poseduje znanje i iskustvo garantuje da ćete dobiti</li>
                        <li><FaCaretRight /> Pravnu sigurnost</li>
                        <li><FaCaretRight /> Finansijsku sigurnost</li>
                        <li><FaCaretRight /> Pravovremene i korisne informacije</li>
                    </ul>
                </div>
                <div className="our-social" data-aos="fade-left">
                    <h1 className="social-title">Pratite Nas</h1>
                    <ul>
                        <li><FaFacebookF /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedinIn /></li>
                    </ul>
                </div>

            </div>

        </div>
    );
}
