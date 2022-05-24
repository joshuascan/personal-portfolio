import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1400px;
  z-index: 100;
  background: ${(props) => props.theme.colors.background};
`;

export const HomeArrow = styled.a`
  position: fixed;
  left: 0;
  bottom: 0;
  margin-left: 4rem;
  font-size: 10rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0.2;
  transition: 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  margin-right: 45rem;
  padding-bottom: 1rem;
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.bold};
  padding: 1.5rem;
  color: ${(props) =>
    props.href === props.pathName
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  text-transform: uppercase;
  transition: 0.3s ease;
  &:hover {
    opacity: ${(props) => (props.href === props.pathName ? 1 : 0.65)};
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  margin: 3rem;
  right: 0;
  top: 0;
`;

export const SocialIcons = styled.a`
  margin-bottom: 2rem;
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
