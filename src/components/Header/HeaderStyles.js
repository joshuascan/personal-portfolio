import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 100;
  background: ${(props) => props.theme.colors.background};
`;

export const HomeArrow = styled.p`
  position: fixed;
  left: 4rem;
  bottom: 0;
  font-size: 9.6rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0.2;
  transition: opacity 0.3s ease;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-right: 45rem;
  padding-bottom: 1rem;
`;

export const NavLink = styled.a`
  font-size: 1.7rem;
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 1.5rem;
  color: ${(props) =>
    props.href === props.pathname
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  text-transform: uppercase;
  transition: 0.3s ease;
  &:hover {
    opacity: ${(props) => (props.href === props.pathname ? 1 : 0.65)};
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem 3rem 1rem 1rem;
  border-radius: 12px;
  right: 0;
  top: 0;
`;

export const SocialIcon = styled.a`
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  transition: 0.3s ease;
  &:hover {
    opacity: 0.65;
  }
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;
