import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, I am <br/>
        Arllan Del Espiritu Santo
      </SectionTitle> 
      <SectionText>
        the personal profile  ijjfiow j;kwop w  iewhhfk k wdhw fhhf w ojjw fhfni  whfhiwif
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;