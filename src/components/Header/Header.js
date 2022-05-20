import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container, Div1, Div2, NavLink, SocialIcons } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <li>
        <Link href="#about" passHref>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/images/resume.pdf" passHref>
          <NavLink target="_blank" rel="noreferrer noopener">
            Resume
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact" passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div1>
    <Div2>
      <Link href="https://github.com/joshuascan" passHref>
        <SocialIcons target="_blank" rel="noreferrer noopener">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </Link>
      <Link href="https://linkedin.com/in/jscanlan" passHref>
        <SocialIcons target="_blank" rel="noreferrer noopener">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Link>
    </Div2>
  </Container>
);

export default Header;
