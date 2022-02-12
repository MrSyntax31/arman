import React, { useState, useRef, useEffect } from 'react';

import { List, ListItem,  } from './AboutStyles';
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
                <List>
                <ListItem>
                    <DiFirebase size="3rem"/>
                    <ListContainer>
                      <ListTitle>Firebase</ListTitle>
                        <ListParagraph>
                          Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
                        </ListParagraph>
                    </ListContainer>
                  </ListItem>
                </List>

                <SectionText>
                  ffe fge fheb gweiowe fwo he jfeh jhy ttd da,  usfsi ksf hl hddhdslf jjada  kvnl ljfshf iuf bj
                </SectionText>
              </div>
            </div>
            
          </div>
        </div>
        <br />


      
    </Section>
  );
};

export default About;
