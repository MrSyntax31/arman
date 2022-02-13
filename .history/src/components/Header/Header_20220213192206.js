import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center", color: "white", marginBottom : 20}}>
          <img src="https://firebasestorage.googleapis.com/v0/b/conquerror-development.appspot.com/o/logo.png?alt=media&token=4b4400ef-568b-4a57-88ac-39b776bbbac0" alt="logo" width="100%"/><Span>Arman</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
     <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li> 
    </Div2>
    <Div3>
        <SocialIcons href="https://github.com/MrSyntax31">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/arllan-del-espiritu-santo-6b74b3207/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/the_arman031/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
