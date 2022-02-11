import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Profile
      </SectionTitle> 
      <SectionText>
        the personal profile  ijjfiow j;kwop w  iewhhfk k wdhw fhhf w ojjw fhfni  whfhiwif
      </SectionText>
      <Button onClick={() => window.location }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;