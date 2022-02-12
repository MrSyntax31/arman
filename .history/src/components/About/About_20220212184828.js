import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';




const About = () => {
  
  return (
    <Section id="about">
      <SectionDivider/>
      <br />
      <SectionTitle>About Me</SectionTitle>
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
          <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/arman.jpg?alt=media&token=581988eb-b443-4009-9109-e2b4b6a6ad5c" alt="avatar" className=" shadow" style={{width:'100%', maxWidth:'400px', height:'auto'}} />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <br/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{backgroundImage: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
      <ul className="details">
        <li className="author"><a href="#">John Doe</a></li>
        <li className="date">Aug. 24, 2015</li>
        <li className="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>


  

      <SectionText>
        ffe fge fheb gweiowe fwo he jfeh jhy ttd da,  usfsi ksf hl hddhdslf jjada  kvnl ljfshf iuf bj
      </SectionText>

      
    </Section>
  );
};

export default About;
