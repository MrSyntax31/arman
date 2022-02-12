import React, { useState, useRef, useEffect } from 'react';

import { List, ListItem, ListContainer, ListTitle, ListParagraph } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';




const About = () => {
  
  return (
    <Section id="about">
      <SectionDivider/>
      <br />
      <SectionTitle>About Me</SectionTitle>

        <div className="container">
          <div className="row">
            
            <div className="col-xs-12 col-sm-4">
              <div className="box">
              <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
                <div className="w-3/4 ">
                  <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/arman.jpg?alt=media&token=581988eb-b443-4009-9109-e2b4b6a6ad5c" alt="avatar" className="mx-auto d-block shadow" style={{width:'100%', maxWidth:'300px', height:'auto'}} />
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
              </div>
            </div>
            
            
            <div className="col-xs-12 col-sm-8">
              <div className="box">
              <figure class="flex">
                      <div class="hero-image w-50 wow fadeInRight" data-wow-delay=".4s"></div>
                      
                      <p class="col p-2 m-2">
                        
                        <strong class="fs-1">Front-End Developer</strong> <br/><br/> <small>Bio</small> <br/> 
                              
                        I'm currently a 4th-year BS Information Technology student at the Polytechnic University of the Philippines, Lopez, Quezon Branch.
                        My hobbies include playing video games, watching anime, and playing volleyball. I'm also a fan of the anime <strong class="fst-italic">Attack on a Titan</strong> and <strong class="fst-italic">One Piece</strong>.
                        Being a front-end developer means I can create a website that is responsive and works on all devices. My mission is to create a website that is user-friendly and easy to use.
                              <br/><br/>
                        I'm a self-taught developer with a passion for learning about new technologies and building web applications.
                        I've been working as an intern for the past 6 months and have worked on a wide variety of projects.
                              <br/><br/>
                              With a background in Information Technology, I have a strong understanding of the software development life cycle.
                              And I'm always looking to learn new technologies and improve my skills.
                              <br/><br/>
                              "Software undergoes beta testing shortly before it’s released. Beta is Latin for still doesn’t work." - Arllan 2021
                          </p>
            </figure>

              </div>
            </div>
            
          </div>
        </div>
        <br />


      
    </Section>
  );
};

export default About;
