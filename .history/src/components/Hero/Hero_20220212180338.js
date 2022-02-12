import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <p cla>Hello there, I am </p>

        Arllan Del Espiritu Santo <br/>

        <small>
          A self-taught Digital Designer and web developer.
        </small>
      </SectionTitle> 
      <SectionText>
          A front-end developer specializing in building web design solutions with ReactJs, JavaScript, and CSS frameworks like Bootstrap and TailwindCSS.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>

      <button className="button-49" role="button">Button 49</button>

    </LeftSection>
  </Section>
);

export default Hero;