import React from 'react';
import logo from '../images/kracunlogops.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
export default function NavBar() {
    return (
        <div>

            <div className="navigation">
                <div className="logo-wrapper">
                    <img src={logo} alt="pic" />
                    <h1 className="logoTitle">KRAČUN <br /> <span>AGENCIJA ZA NEKRETNINE</span></h1>
                </div>
                <div className="nav-bar">
                    <ul>
                        <Link className='link' to='/'> Početna</Link>
                        <HashLink className='link' to='#about'>O nama</HashLink>
                        <HashLink className='link' to='#contact'>Kontakt</HashLink>
                        <Link className='link' to='/Gallery'> Galerija</Link>

                    </ul>
                </div>
            </div >
        </div>
    );
}
