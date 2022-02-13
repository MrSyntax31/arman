import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
        <p style={{fontSize:'2rem'}}>Hello there, I am </p>
      <SectionTitle main center className="NameTitle">
        Arllan Rabe Del Espiritu Santo <br/>

      </SectionTitle> 
        <small>
          A self-taught Digital Designer and web developer.
        </small>
      <SectionText>
          A front-end developer specializing in building web design solutions with ReactJs, JavaScript, and CSS frameworks like Bootstrap and TailwindCSS.
      </SectionText>

      <button className="button-49" role="button" style={{marginBottom:'5rem'}} onClick={() => window.location = 'https://google.com'}>Learn More</button>

    </LeftSection>
  </Section>
);

export default Hero;