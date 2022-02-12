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
          <SectionText>React Js</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/342062/next-js.svg" className="w-25"/>
        <ListContainer>
          <SectionText>Next Js</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/373595/firebase.svg" className="w-25"/>
        <ListContainer>
          <SectionText>Firebase</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" class="w-25"/>
        <ListContainer>
          <SectionText>JavaScript</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/349474/php.svg" class="w-25"/>
        <ListContainer>
          <SectionText>PHP</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" class="w-25"/>
        <ListContainer>
          <SectionText>Tailwind CSS</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/353498/bootstrap.svg" class="w-25"/>
        <ListContainer>
          <SectionText>Bootstrap</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/354987/figma.svg" class="w-25"/>
        <ListContainer>
          <SectionText>Figma</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://developers.adalo.com/img/adalo-logo-black.png" class="w-50"/>
        <ListContainer>
          <SectionText>Adalo</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/376339/netlify.svg" class="w-25"/>
        <ListContainer>
          <SectionText>Netlify</SectionText>
        </ListContainer>
      </ListItem>

      <ListItem>
      <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" class="w-25"/>
        <ListContainer>
          <SectionText>SQL Server</SectionText> 
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
