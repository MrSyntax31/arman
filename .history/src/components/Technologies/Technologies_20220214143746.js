import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, Skills, SkillsParagraph, SkillsLinks, SkillsTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/> 
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here are some technologies that I use to build web applications.
    </SectionText>

                    <Boxes className="box-wrap">
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/355190/reactjs.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">React</SectionText>
                      </Box>
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/342062/next-js.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">Next</SectionText>
                      </Box>
                      <Box className="TechStack">
                          <img src="https://www.svgrepo.com/show/373595/firebase.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText className="text-center">Firebase</SectionText>
                      </Box>
                      <Box className="TechStack">
                          <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText className="text-center">JavaScript</SectionText>
                      </Box>
                    </Boxes>

                    <Boxes className="box-wrap">
                      <Box className="TechStack">
                          <img src="https://www.svgrepo.com/show/349474/php.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText className="text-center">PHP</SectionText>
                      </Box>
                      <Box className="TechStack">
                          <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText className="text-center">Tailwind</SectionText>
                      </Box>
                      <Box className="TechStack">
                          <img src="https://www.svgrepo.com/show/353498/bootstrap.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText className="text-center">Bootstrap</SectionText>
                      </Box>
                      <Box className="TechStack">
                          <img src="https://www.svgrepo.com/show/354987/figma.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText className="text-center">Figma</SectionText>
                      </Box>
                    </Boxes>

                    <Boxes className="box-wrap">
                      <Box className="TechStack">
                            <img src="https://developers.adalo.com/img/adalo-logo-black.png" className="mx-auto d-block" width='160px'/>
                            <SectionText className="text-center">Adalo</SectionText>
                      </Box>
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/376339/netlify.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">Netlify</SectionText>
                      </Box>
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" className="mx-auto d-block" width='70px'/>
                            <SectionText className="text-center">SQL Server</SectionText>
                      </Box>
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/353884/html-5.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">HTML</SectionText>   
                      </Box>
                    </Boxes>

                    <Boxes className="box-wrap">
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/303263/css3-logo.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">CSS</SectionText>
                      </Box>
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/391458/github.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">Github</SectionText>
                      </Box>
                      <Box className="TechStack">
                            <img src="https://www.svgrepo.com/show/373623/git.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">Git</SectionText>
                      </Box>
                    </Boxes>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 mb-5">
                        
                        <Skills className="single-feature wow fadeInUp" data-wow-delay=".2s">
                        <SkillsLinks>P</SkillsLinks>
                        <SkillsTitle>Programming</SkillsTitle>
                        <SkillsParagraph>
                              Computer programmer skills are methods and processes that provide computers with instructions on what actions to perform. Collectively known as “code,” these instructions are written by computer programmers to solve problems or perform specific tasks.</SkillsParagraph>
                        <a href="https://www.indeed.com/career-advice/resumes-cover-letters/computer-programmer-skills">See more</a>
                        </Skills>
                        
                        </div>

                        <br/>

                        <div className="col-lg-4 col-md-6 col-12 mb-5">
                        
                        <Skills className="single-feature wow fadeInUp" data-wow-delay=".4s">
                        <SkillsLinks>D</SkillsLinks>
                        <SkillsTitle>Designing</SkillsTitle>
                        <SkillsParagraph>Graphic designer skills are various artistic and creative skills and abilities needed to excel in a graphic design role. A graphic designer may work in-house at a design or advertising agency, in the marketing department of an organization or independently as a freelance contractor. They'll build visual print or digital content for clients that communicates the brand's message or story using visually appealing images, colors and fonts.</SkillsParagraph>
                        <a  href="https://www.indeed.com/career-advice/resumes-cover-letters/skills-of-graphic-designer">See more</a>
                        </Skills>
                        
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-12">
                        
                        <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                        <i className="lni lni-users"></i>
                        <h3>Team player</h3>
                        <p>A team player is someone who actively contributes to their group in order to complete tasks, meet goals or manage projects. Team players actively listen to their coworkers, respect ideas and aim to improve the product or process at hand. Team players understand that their team’s success is their own success, and they share responsibility when their team experiences difficulties along the way.</p>
                        <a href="https://www.indeed.com/career-advice/career-development/team-player-qualities">See more</a>   
                        </div>
                        
                        </div>
                  </div>
    <br />
  </Section>
);

export default Technologies;
