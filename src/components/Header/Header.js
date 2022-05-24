import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  HeaderWrapper,
  HomeArrow,
  NavContainer,
  SocialContainer,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {
  const router = useRouter();

  return (
    <HeaderWrapper id="">
      <Link href="/#" passHref>
        <HomeArrow pathName={router.asPath}>^</HomeArrow>
      </Link>
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
          <SocialIcons target="_blank" rel="noreferrer noopener">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </Link>
        <Link href="https://linkedin.com/in/jscanlan" passHref>
          <SocialIcons target="_blank" rel="noreferrer noopener">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </Link>
      </SocialContainer>
    </HeaderWrapper>
  );
};

export default Header;
