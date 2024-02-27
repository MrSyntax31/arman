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
                  <figure>
                    <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/IMG_2939%205R.jpg?alt=media&token=e5e0a7ca-3a56-4088-be24-c947a5ab24e9" alt="Me" className="mx-auto d-block shadow item" style={{width:'100%', maxWidth:'300px', height:'auto'}} />
                  </figure>
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
              <figure className="flex">
                      <div className="hero-image w-50 wow fadeInRight" data-wow-delay=".4s"></div>
                      
                      <article className="col p-2 m-2">
                        
                        <SectionTitle>Arllan Del Espiritu Santo </SectionTitle> 
                              
                        I'm currently employed at Datawords 24/7 PH, a multi-cultural and international company, as a <strong className="fst-italic"> Jr. Digital Specialist </strong> at their Makati City office here in Metro Manila.
                       <br/><br/>
                        As a Quality Assurance Specialist, my duties and responsibilities include integrating updates via a content management system (CMS). It involves investigation of the issues on the websites, activities in the JSONs and scripts, documentation, and reports of bugs, errors, and progress in the tickets. Most of my integrations involve investigations, readings, and localization of different contents in the respective locales of the brands that the company manages.
                        I'm enjoying my time as a new member of this expanding company, where I participate in team projects, and communicate with clients and project managers all over the world.
                        <br/><br/>
                        "Software undergoes beta testing shortly before it’s released. Beta is Latin for still doesn’t work." - Unknown
                      </article>
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
