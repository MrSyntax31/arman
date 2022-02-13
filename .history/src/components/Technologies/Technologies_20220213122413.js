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

                    <Boxes>
                      <Box>
                            <img src="https://www.svgrepo.com/show/355190/reactjs.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>React</SectionText>
                      </Box>
                      <Box>
                            <img src="https://www.svgrepo.com/show/342062/next-js.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>Next</SectionText>
                      </Box>
                      <Box>
                          <img src="https://www.svgrepo.com/show/373595/firebase.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText>Firebase</SectionText>
                      </Box>
                      <Box>
                          <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText>JavaScript</SectionText>
                      </Box>

                      <Box>
                          <img src="https://www.svgrepo.com/show/349474/php.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText>PHP</SectionText>
                      </Box>
                      <Box>
                          <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText>Tailwind</SectionText>
                      </Box>
                      <Box>
                          <img src="https://www.svgrepo.com/show/353498/bootstrap.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText>Bootstrap</SectionText>
                      </Box>
                      <Box>
                          <img src="https://www.svgrepo.com/show/354987/figma.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText>Figma</SectionText>
                      </Box>

                      <Box>
                            <img src="https://developers.adalo.com/img/adalo-logo-black.png" className="mx-auto d-block" width='160px'/>
                            <SectionText>Adalo</SectionText>
                      </Box>
                      <Box>
                            <img src="https://www.svgrepo.com/show/376339/netlify.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>Netlify</SectionText>
                      </Box>
                      <Box>
                      <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" className="mx-auto d-block" width='70px'/>
                            <SectionText>SQL Server</SectionText>
                      </Box>
                      <Box>
                          <img src="https://www.svgrepo.com/show/354987/figma.svg" className="mx-auto d-block" width='50px'/>
                          <SectionText>Figma</SectionText>
                      </Box>
                    </Boxes>
    <div className="card-body">
                <div className="interests container mx-auto d-block">
                    <div className="row">

                   

                      <div className="col">
                        <div className="icon-box">
                            <img src="https://www.svgrepo.com/show/376339/netlify.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>Netlify</SectionText>
                        </div>
                      </div>

                      <div className="col">
                        <div className="icon-box">
                            <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" className="mx-auto d-block" width='70px'/>
                            <SectionText>SQL Server</SectionText>
                        </div>
                      </div>

                      <div className="col">
                        <div className="icon-box">
                            <img src="https://www.svgrepo.com/show/353884/html-5.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>HTML</SectionText>
                        </div>
                      </div>

                      <div className="col">
                        <div className="icon-box">
                            <img src="https://www.svgrepo.com/show/303263/css3-logo.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>CSS</SectionText>
                        </div>
                      </div>

                      <div className="col">
                        <div className="icon-box">
                            <img src="https://www.svgrepo.com/show/217753/github.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>Github</SectionText>
                        </div>
                      </div>

                      <div className="col">
                        <div className="icon-box">
                            <img src="https://www.svgrepo.com/show/373623/git.svg" className="mx-auto d-block" width='50px'/>
                            <SectionText>Git</SectionText>
                        </div>
                      </div>
                      
                    </div>
              
                  </div>
            </div>
    <br />
  </Section>
);

export default Technologies;
