import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <h6>Hello there, I am </h6>

        Arllan Del Espiritu Santo <br/>

        <small>
          A self-taught Digital Designer and web developer.
        </small>
      </SectionTitle> 
      <SectionText>
      Hello! I'm Arllan, a front-end software developer specializing in building web design solutions with ReactJs, JavaScript, and CSS frameworks like Bootstrap and TailwindCSS.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;