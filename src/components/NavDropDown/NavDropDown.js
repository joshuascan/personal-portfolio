import { useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMenu } from "react-icons/fi";
import {
  DropDownContainer,
  MenuContainer,
  Menu,
  NavWrapper,
  LinkContainer,
  NavLink,
  SocialContainer,
  SocialIcon,
  Img,
} from "./NavDropDownStyles";

const NavDropDown = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <DropDownContainer>
      <MenuContainer>
        <Menu onClick={toggleNav}>
          <FiMenu size={"40px"} />
        </Menu>
      </MenuContainer>
      <NavWrapper visible={isNavExpanded}>
        <LinkContainer>
          <Link href="#about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="#projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
          <Link href="#contact" passHref>
            <NavLink>Contact</NavLink>
          </Link>
          <Link href="/images/resume.pdf" passHref>
            <NavLink target="_blank" rel="noreferrer noopener">
              Resume
            </NavLink>
          </Link>
        </LinkContainer>
        <SocialContainer>
          <Link href="https://github.com/joshuascan" passHref>
            <SocialIcon
              title="GitHub"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiGithub size="2rem" />
            </SocialIcon>
          </Link>
          <Link href="https://linkedin.com/in/jscanlan" passHref>
            <SocialIcon
              title="LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiLinkedin size="2rem" />
            </SocialIcon>
          </Link>
          <Link href="https://opensea.io/josh-scanlan" passHref>
            <SocialIcon
              title="OpenSea"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Img src="/images/opensea-logo.png" />
            </SocialIcon>
          </Link>
        </SocialContainer>
      </NavWrapper>
    </DropDownContainer>
  );
};

export default NavDropDown;
