import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/> 
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here are some technologies that I use to build web applications.
    </SectionText>
    <List>
      <ListItem>
        <img src="https://www.svgrepo.com/show/355190/reactjs.svg" className="w-25"/>
        <ListContainer>
          <ListTitle>React Js</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://zeit.co/design/nextjs" className="w-25"/>
        <ListContainer>
          <ListTitle>React Js</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/373595/firebase.svg" className="w-25"/>
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Firebase</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
