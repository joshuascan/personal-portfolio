import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  FooterContainer,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:805-570-0498">805-570-0498</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:joshuascan@gmail.com">
              joshuascan@gmail.com
            </LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/joshuascan">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/jscanlan">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
