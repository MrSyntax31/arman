import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, ExternalLinks } from './AcomplishmentsStyles';

import * as AiIcons from 'react-icons/ai';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 3, text: 'Github Followers', },
  { number: 470, text: 'Github Contributions', },
  { number: 40, text: 'Github Stars', }
];

const cert = [
  { source: 'https://drive.google.com/file/d/1XAOY8srvvwPF470E7XBry9BpqFsl5PgN/view?usp=sharing', text: 'Programmers and Developers Web Development 1' },
  { source: 'https://drive.google.com/file/d/1gkhasodhSd6jiWIUoahwGf9-90P4jwYK/view?usp=sharing', text: 'Mechatronics Servicing NCII TESDA ', },
  { source: 'https://drive.google.com/file/d/1-30Co3fhoQ9BZ_LVGOHiSfR1EctWuhYa/view?usp=sharing', text: '2nd Research Colloquium', },
  { source: 'https://drive.google.com/file/d/1_FHfygVJhMu3_or92RZP7YZrImz0v3Tz/view?usp=sharing', text: '17th Y4IT Congress', },

  { source: 'https://drive.google.com/file/d/1iJaKugytlFMFgF6WUfG9IhtvfwVOhtSv/view?usp=sharing', text: '1st Online Tutorial Program on IT', },
];

const docu  = [
  { source: 'https://drive.google.com/file/d/1T1cmIlv-dIejpw-TNnlV8Llg_63Tuqnn/view?usp=sharing', text: '18th Y4IT Congress', },
  { source: 'https://drive.google.com/file/d/11Df6vhhQSn744SaGpUbEXcKHm13wyHcn/view?usp=sharing', text: 'Animation as a side Hustle in this time of Pandemic Part 1', },
  { source: 'https://drive.google.com/file/d/12hpz4lsjquxUSQ6EAfiGgPkiOxWo1Ruc/view?usp=sharing', text: 'Animation as a side Hustle in this time of Pandemic Final Part', },
  { source: 'https://drive.google.com/file/d/1Yu3aA9VSMhowfZCrpMi3B9ZvgXLrYLj9/view?usp=sharing', text: 'Transitioning from Industry 4.0 to 5.0 Automation', },
];

const docs = [
  
]

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
          <BoxText>{card.text}</BoxText>
          <BoxNum>
            <ExternalLinks href={card.source}>View</ExternalLinks>
          </BoxNum>
        </Box>
      ))}
    </Boxes>

    <Boxes>
      {docu.map((card, index)=>(
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
          <BoxNum>
            <ExternalLinks href={card.source}>View</ExternalLinks>
          </BoxNum>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
