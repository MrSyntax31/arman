import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDescription = [{
  title:'Project 1',
  description:'This is a very very long project description.'
},{
  title:'Project 2',
  description:'This is a very very long project description.'
},{
  title:'Project 3',
  description:'This is a very very long project description.'
},
{
  title:'Project 4',
  description:'This is a very very long project description.'
}];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} alt={title}/>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
            </TitleContent>
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
);

export default Projects; 