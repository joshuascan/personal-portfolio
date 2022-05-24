import Link from "next/link";
import { useRouter } from "next/router";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  HeaderWrapper,
  HomeArrow,
  NavContainer,
  SocialContainer,
  NavLink,
  SocialIcons,
  Img,
} from "./HeaderStyles";

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
    <HeaderWrapper id="">
      <HomeArrow onClick={scrollToTop}>^</HomeArrow>
      <NavContainer>
        <li>
          <Link href="#about" passHref>
            <NavLink pathName={router.asPath}>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects" passHref>
            <NavLink pathName={router.asPath}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact" passHref>
            <NavLink pathName={router.asPath}>Contact</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/images/resume.pdf" passHref>
            <NavLink target="_blank" rel="noreferrer noopener">
              Resume
            </NavLink>
          </Link>
        </li>
      </NavContainer>
      <SocialContainer>
        <Link href="https://github.com/joshuascan" passHref>
          <SocialIcons title="GitHub" target="_blank" rel="noreferrer noopener">
            <FiGithub size="2rem" />
          </SocialIcons>
        </Link>
        <Link href="https://linkedin.com/in/jscanlan" passHref>
          <SocialIcons
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FiLinkedin size="2rem" />
          </SocialIcons>
        </Link>
        {/* <Link href="mailto:joshuascan@gmail.com" passHref>
          <SocialIcons title="Email" target="_blank" rel="noreferrer noopener">
            <FiMail size="2rem" />
          </SocialIcons>
        </Link> */}
        <Link href="https://opensea.io/josh-scanlan" passHref>
          <SocialIcons
            title="OpenSea"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Img src="/images/opensea-logo.png" />
          </SocialIcons>
        </Link>
      </SocialContainer>
    </HeaderWrapper>
  );
};

export default Header;
