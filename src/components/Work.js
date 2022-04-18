import React from 'react'

import css from '../assets/img/css3.png';
import html from '../assets/img/html-5.png';
import js from '../assets/img/javascript.png';
import php from '../assets/img/php.png';
import wp from '../assets/img/wordpress.png';
import react from '../assets/img/react.png';
import figma from '../assets/img/figma.png';
import Section from '../layout/Section';

const Work = (props) => {
    //hlkhklhlkhj

    return (
        <Section>
            <h2 className="text-5xl text- font-bold text-main-purple mb-5" >Technologies Used</h2>
            <ul className="flex flex-cols">
                <li><img src={html} /></li>
                <li><img src={css} /></li>
                <li><img src={js} /></li>
                <li><img src={react} /></li>
                <li><img src={wp} /></li>
                <li><img src={figma} /></li>
            </ul>

        </Section>
    )
}

export default Work