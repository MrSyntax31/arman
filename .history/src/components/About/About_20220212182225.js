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
          <img src="https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/262820523_2769605173339792_8414088407703325209_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH4iE4eUI7FCgswuZovbhxjBn8XsRhzcfwGfxexGHNx_D-bLJ5CwGUQq8AlDabmpW-aa1Wcg0nStlnvB9e4628I&_nc_ohc=lZcBZOkrH6cAX--elkB&_nc_ht=scontent.fmnl13-1.fna&oh=00_AT8P1dzeWEO5ozleskHcBF0vYhSHoEGW_BOQAq2I-fpILQ&oe=620D142F" alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
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
      <SectionText>
        ffe fge fheb gweiowe fwo he jfeh jhy ttd da,  usfsi ksf hl hddhdslf jjada  kvnl ljfshf iuf bj
      </SectionText>

      
    </Section>
  );
};

export default About;
