import Link from "next/link";
import { useRouter } from "next/router";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  HeaderWrapper,
  HomeArrow,
  NavWrapper,
  LinkContainer,
  SocialContainer,
  NavLink,
  SocialIcon,
  Img,
} from "./HeaderStyles";
import NavDropDown from "../NavDropDown/NavDropDown";

const Header = () => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    router.push("/");
  };

  return (
    <HeaderWrapper>
      <HomeArrow onClick={scrollToTop}>^</HomeArrow>
      <NavDropDown />
      <NavWrapper>
        <LinkContainer>
          <Link href="#about" passHref>
            <NavLink pathname={router.asPath}>About</NavLink>
          </Link>
          <Link href="#projects" passHref>
            <NavLink pathname={router.asPath}>Projects</NavLink>
          </Link>
          <Link href="#contact" passHref>
            <NavLink pathname={router.asPath}>Contact</NavLink>
          </Link>
          <Link href="/images/josh_scanlan_resume.pdf" passHref>
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
              <Img src="/images/opensea_logo.png" alt="OpenSea logo" />
            </SocialIcon>
          </Link>
        </SocialContainer>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
