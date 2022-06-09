import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: none;
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;

export const MenuContainer = styled.div`
  text-align: right;
  height: 6vh;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
`;

export const NavWrapper = styled.div`
  height: ${(props) => (props.open ? "94vh" : "0px")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: all 0.4s ease-in-out;
`;

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled.a`
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 2rem;
  letter-spacing: 0.4rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 12rem;
`;

export const SocialIcon = styled.a`
  margin: 1.5rem 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const Img = styled.img`
  width: 3rem;
`;
