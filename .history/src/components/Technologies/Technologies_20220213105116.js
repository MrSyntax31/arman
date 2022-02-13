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
    <div class="card-body">
                <div class="interests container">
              
                    <div class="row  ">
                      <div class="col-lg-3 col-md-4">
                        <div class="icon-box">
                          <img src="https://www.svgrepo.com/show/355190/reactjs.svg" class="w-25"/>
                          <h3 class="m-1"> React / React Native</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                          <img src="https://www.svgrepo.com/show/373595/firebase.svg" class="w-25"/>
                          <h3>Firebase</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                          <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" class="w-25"/>
                          <h3 class="m-1">JavaScript</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                        <div class="icon-box">
                            <img src="https://www.svgrepo.com/show/349474/php.svg" class="w-25"/>
                          <h3 class="m-1">PHP</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" class="w-25"/>
                          <h3 class="m-1">Tailwindcss</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <img src="https://www.svgrepo.com/show/353498/bootstrap.svg" class="w-25"/>
                          <h3 class="m-1">Bootstrap</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                          <img src="https://www.svgrepo.com/show/354987/figma.svg" class="w-25"/>
                          <h3 class="m-1">Figma</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <img src="https://developers.adalo.com/img/adalo-logo-black.png" class="w-50"/>
                            <h3 class="m-1">Adalo</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <img src="https://www.svgrepo.com/show/376339/netlify.svg" class="w-25"/>
                            <h3 class="m-1">Netlify</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" class="w-25"/>
                            <h3 class="m-1">SQL Server</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <img src="https://www.svgrepo.com/show/353884/html-5.svg" class="w-25"/>
                            <h3 class="m-1">HTML</h3>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 mt-4">
                        <div class="icon-box">
                            <img src="https://www.svgrepo.com/show/303263/css3-logo.svg" class="w-25"/>
                            <h3 class="m-1">CSS</h3>
                        </div>
                      </div>
                    </div>
              
                  </div>
            </div>
    <br />
  </Section>
);

export default Technologies;
