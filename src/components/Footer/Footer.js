import Link from "next/link";
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
  FooterText,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          Designed by Andrea Wilson / Built by Josh Scanlan
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
