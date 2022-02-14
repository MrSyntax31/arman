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
        <h1>
          A self-taught Digital Designer and web developer.
        </h1>
      <SectionText>
          A front-end developer specializing in building web design solutions with ReactJs, JavaScript, and CSS frameworks like Bootstrap and TailwindCSS.
      </SectionText>

      <button className="button-49" role="button" style={{marginBottom:'5rem'}} onClick={() => window.location = 'https://drive.google.com/file/d/1meqIBm1iw639fvehc_IxvUkhhdO0P-57/view?usp=sharing'}>Reesum</button>

    </LeftSection>
  </Section>
);

export default Hero;