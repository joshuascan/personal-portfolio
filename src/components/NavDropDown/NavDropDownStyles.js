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
  margin-top: 1rem;
  margin-right: 1rem;
`;

export const NavWrapper = styled.div`
  height: ${(props) => (props.visible ? "30vh" : "0px")};
  transition: height 0.4s ease-in-out;
  overflow: hidden;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 2.8rem;
  font-family: ${(props) => props.theme.fonts.bold};
  margin: 1rem;
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
  margin: 1.5rem 2.5rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`;

export const Img = styled.img`
  width: 3rem;
`;
