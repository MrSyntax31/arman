import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';




const About = () => {
  
  return (
    <Section id="about">
      <SectionDivider/>
      <br />
      <SectionTitle>About Me</SectionTitle>

      <SectionText>
        ffe fge fheb gweiowe fwo he jfeh jhy ttd da,  usfsi ksf hl hddhdslf jjada  kvnl ljfshf iuf bj
      </SectionText>


        <div className="container">
          <div className="row">
            
            <div className="col-xs-12 col-sm-4">
              <div className="box">
              <SectionText>
              ffe fge fheb gweiowe fwo he jfeh jhy ttd da,  usfsi ksf hl hddhdslf jjada  kvnl ljfshf iuf bj
            </SectionText>
              </div>
            </div>
            
            
            <div className="col-xs-12 col-sm-8">
              <div className="box">
                <SectionText>
                  ffe fge fheb gweiowe fwo he jfeh jhy ttd da,  usfsi ksf hl hddhdslf jjada  kvnl ljfshf iuf bj
                </SectionText>
              </div>
            </div>
            
          </div>
        </div>


      
    </Section>
  );
};

export default About;
