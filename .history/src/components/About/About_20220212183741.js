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

      <div className="container">
                                                <div className="row justify-content-start align-items-center">
                                                    <div className="col-lg-5">
                                                        <div className="about_img">
                                                            <img className="" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Annie Spratt unsplash.com/photos/MChSQHxGZrQ"/>
                                                        </div>
                                                    </div>

                                                    <div className="offset-lg-1 col-lg-5 mt-3">
                                                        <div className="main_title text-left">
                                                            <h2 className="fw-bold mb-3">let’s <br/>
                                                                Learn and study  <br/>
                                                                together</h2>
                                                            <p className="mb-3">
                                                                It's easy to study and learn if there is someone willing to help you. In these tutorials, you will learn how to become an independent leaner  and understand how to conquer your own problems.
                                                            </p>
                                                            <p> 
                                                                There are a lot of tutorials on the internet, but they are not meant for you. These tutorials are designed to help you understand how to become a better learner.
                                                                The following tutorial shows tips, guides, insight and strategies to help you better understood computer programming..
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
      <SectionText>
        ffe fge fheb gweiowe fwo he jfeh jhy ttd da,  usfsi ksf hl hddhdslf jjada  kvnl ljfshf iuf bj
      </SectionText>

      
    </Section>
  );
};

export default About;
