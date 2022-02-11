import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {[{
          title:'Project 1',
          description:'This is a very very long '
        }].map((projects) => (
          <div>
            {projects}
          </div>
        ))}
      </GridContainer>
  </Section>
);

export default Projects; 