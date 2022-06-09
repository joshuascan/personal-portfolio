import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: none;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }
`;

export const MenuContainer = styled.div`
  text-align: right;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
`;

export const Menu = styled.button`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  right: 0;
`;

export const NavWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 1.7rem;
  font-family: ${(props) => props.theme.fonts.bold};
  margin: 0.5rem;
  color: ${(props) =>
    props.href === props.pathname
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  text-transform: uppercase;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  margin: 0.5rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`;

export const Img = styled.img`
  width: 2rem;
`;
