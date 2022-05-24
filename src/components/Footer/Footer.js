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
        {/* <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <Link href="tel:805-570-0498" passHref>
              <LinkItem href="tel:805-570-0498">805-570-0498</LinkItem>
            </Link>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <Link href={mailTo()} passHref>
              <LinkItem target="_blank" rel="noreferrer noopener">
                joshua<span hidden>adsf78yfha738fh</span>scan@gmail.com
              </LinkItem>
            </Link>
          </LinkColumn>
        </LinkList> */}
        <FooterText>
          Designed by Andrea Wilson / Built by Josh Scanlan
        </FooterText>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
