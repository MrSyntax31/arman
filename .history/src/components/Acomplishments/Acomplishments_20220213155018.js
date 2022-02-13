import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 3, text: 'Github Followers', },
  { number: 470, text: 'Github Contributions', },
  { number: 40, text: 'Github Stars', }
];

const cert = [
  { source: 'https://drive.google.com/file/d/1XAOY8srvvwPF470E7XBry9BpqFsl5PgN/view?usp=sharing', text: 'Open Source Projects'},
  { number: 10, text: 'Certificates', },
  { number: 3, text: 'Github Followers', },
  { number: 470, text: 'Github Contributions', },
  { number: 40, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {cert.map((card, index)=>(
        <Box key={index}>
          <BoxNum>
            <link href={card.source}/>
          </BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
