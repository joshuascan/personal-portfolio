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
import Burger from "../Burger/Burger";

const NavDropDown = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <DropDownContainer>
      <MenuContainer>
        <Burger open={open} toggleNav={toggleNav} />
        {/* <Menu onClick={toggleNav}>
          <FiMenu size={"40px"} />
        </Menu> */}
      </MenuContainer>
      <NavWrapper open={open}>
        <LinkContainer>
          <Link href="#about" passHref>
            <NavLink onClick={closeMenu}>About</NavLink>
          </Link>
          <Link href="#projects" passHref>
            <NavLink onClick={closeMenu}>Projects</NavLink>
          </Link>
          <Link href="#contact" passHref>
            <NavLink onClick={closeMenu}>Contact</NavLink>
          </Link>
          <Link href="/images/resume.pdf" passHref>
            <NavLink
              onClick={closeMenu}
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </NavLink>
          </Link>
        </LinkContainer>
        <SocialContainer>
          <Link href="https://github.com/joshuascan" passHref>
            <SocialIcon
              title="GitHub"
              onClick={closeMenu}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiGithub size="3rem" />
            </SocialIcon>
          </Link>
          <Link href="https://linkedin.com/in/jscanlan" passHref>
            <SocialIcon
              title="LinkedIn"
              onClick={closeMenu}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiLinkedin size="3rem" />
            </SocialIcon>
          </Link>
          <Link href="https://opensea.io/josh-scanlan" passHref>
            <SocialIcon
              title="OpenSea"
              onClick={closeMenu}
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
