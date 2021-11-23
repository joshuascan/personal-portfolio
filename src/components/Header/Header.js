import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container, Div1, Div2, NavLink, SocialIcons } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <li>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#resume">
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div1>
    <Div2>
      <SocialIcons href="https://github.com/joshuascan">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/jscanlan">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div2>
  </Container>
);

export default Header;
