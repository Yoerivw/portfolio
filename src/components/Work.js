import React from 'react';


import css from '../assets/img/css3.png';
import html from '../assets/img/html-5.png';
import js from '../assets/img/javascript.png';

import wp from '../assets/img/wordpress.png';
import react from '../assets/img/react.png';
import figma from '../assets/img/figma.png';
import Section from '../layout/Section';
import Card from './Card';

const Work = (props) => {


    return (
        <Section>

            <h2 className="text-5xl text-white text-main-purple mb-5" >Projects</h2>
            <div className="grid grid-cols-3 gap-5">
                <Card />
                <Card />
                <Card />
            </div>
            {/*  <ul className="flex flex-cols">
                <li><img src={html} alt='html icon' /></li>
                <li><img src={css} alt='css icon' /></li>
                <li><img src={js} alt='javascript icon' /></li>
                <li><img src={react} alt='react icon' /></li>
                <li><img src={wp} alt='WordPress icon' /></li>
                <li><img src={figma} alt='figma icon' /></li>
            </ul>

 */}        </Section>
    )
}

export default Work