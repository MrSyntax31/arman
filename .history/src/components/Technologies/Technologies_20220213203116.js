import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes } from './TechnologiesStyles';

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

                    <Boxes>
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

                    <Boxes>
                      <Box>
                            <img src="https://developers.adalo.com/img/adalo-logo-black.png" className="mx-auto d-block" width='160px'/>
                            <SectionText className="text-center">Adalo</SectionText>
                      </Box>
                      <Box>
                            <img src="https://www.svgrepo.com/show/376339/netlify.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">Netlify</SectionText>
                      </Box>
                      <Box>
                            <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" className="mx-auto d-block" width='70px'/>
                            <SectionText className="text-center">SQL Server</SectionText>
                      </Box>
                      <Box>
                            <img src="https://www.svgrepo.com/show/353884/html-5.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">HTML</SectionText>   
                      </Box>
                    </Boxes>

                    <Boxes>
                      <Box>
                            <img src="https://www.svgrepo.com/show/303263/css3-logo.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">CSS</SectionText>
                      </Box>
                      <Box>
                            <img src="https://www.svgrepo.com/show/391458/github.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">Github</SectionText>
                      </Box>
                      <Box>
                            <img src="https://www.svgrepo.com/show/373623/git.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText className="text-center">Git</SectionText>
                      </Box>
                    </Boxes>
    <br />
  </Section>
);

export default Technologies;
