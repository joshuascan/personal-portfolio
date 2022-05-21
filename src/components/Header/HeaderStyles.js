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

export const NavContainer = styled.div`
  display: flex;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  font-weight: bold;
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

export const SocialIcons = styled.a`
  margin: 1.8rem;
  color: ${(props) => props.theme.colors.secondary};
  transition: 0.3s ease;
  &:hover {
    opacity: 0.65;
  }
`;
