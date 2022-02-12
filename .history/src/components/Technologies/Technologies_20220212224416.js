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
        <img src="https://www.svgrepo.com/show/342062/next-js.svg" className="w-25"/>
        <ListContainer>
          <ListTitle>Next Js</ListTitle>
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
        <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" class="w-25"/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/349474/php.svg" class="w-25"/>
        <ListContainer>
          <ListTitle>PHP</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" class="w-25"/>
        <ListContainer>
          <ListTitle>Tailwind CSS</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/353498/bootstrap.svg" class="w-25"/>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://www.svgrepo.com/show/354987/figma.svg" class="w-25"/>
        <ListContainer>
          <ListTitle>Figma</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <img src="https://developers.adalo.com/img/adalo-logo-black.png" class="w-50"/>
        <ListContainer>
          <ListTitle>Figma</ListTitle>
            <ListParagraph>
              Firebase is a cloud-hosted, serverless, open-source realtime database and storage platform.
            </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
