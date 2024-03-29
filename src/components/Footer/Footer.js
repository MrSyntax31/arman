import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

//const countEl = document.getElementById('count');

//updateVisitCount();

//function updateVisitCount() {
//	fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
//	.then(res => res.json())
//	.then(res => {
//		countEl.innerHTML = res.value;
//	})
//}


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0956-528-0371">0956-528-0371</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:arllan.delespiritusanto03@gmail.com">arllan.delespiritusanto03@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        <LinkColumn>
          <LinkTitle>Visitors Count</LinkTitle>
          <div className="elfsight-app-f805585b-4cd9-4005-9de2-2217f26b1d0b"></div>
        </LinkColumn>

        <br />
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>A move that can change your life!</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/MrSyntax31">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/arllan-del-espiritu-santo-6b74b3207/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/armanthology/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
