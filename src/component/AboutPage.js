import React from 'react';
import teamImage from '../images/team.jpg'

export default function AboutPage() {
    return (
        <div>
            <div className="about-wrapper" id="about">
                <div className="about" >
                    <div data-aos="fade-right" className="photo">
                        <img src={teamImage} alt="" />
                    </div>
                    <div data-aos="fade-left" className="about-text">
                        <h1 className="about-title">
                            Ko Smo Mi
                        </h1>
                        <p >„Kračun“ je jedna je od prvih agencija za nekretnine u Vojvodini. Sa dokazanim iskustvom i uspehom u radu sa nekretninama i zadovoljnim klijentima na našoj strani, svoje usluge sada nudimo na teritoriji cele Republike Srbije sa mogućnošću saradnje i sa stranim agencijama.

                        </p>

                        <p>Naša misija je da pronađemo nekretninu koja u svemu odgovara Vašim željama i mogućnostima, a najbolji pokazatelj da smo u tome uspeli je poverenje koje smo stekli.</p>
                        <p>Tim koji će ostvariti sve Vaše snove poseduje znanje i iskustvo ne samo u radu sa nekretninama, već i u saradnji sa specijalizovanim advokatskim kancelarijama pomoći ćemo Vam da stepen pravne sigurnosti bude na najvišem nivou.</p>

                        <h1 className="about-subtitle">
                            MISLIMO GLOBALNO DELUJEMO LOKALNO
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
