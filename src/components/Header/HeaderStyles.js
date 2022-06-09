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
  background: ${({ theme }) => theme.colors.background};
`;

export const HomeArrow = styled.p`
  position: fixed;
  left: 4rem;
  bottom: 0;
  font-size: 9.6rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.2;
  transition: opacity 0.3s ease;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-right: 45rem;
  padding-bottom: 1rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    margin-right: 30rem;
  }
`;

export const NavLink = styled.a`
  font-size: 1.7rem;
  font-family: ${({ theme }) => theme.fonts.bold};
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
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem 3rem 1rem 1rem;
  border-radius: 0 0 0 12px;
  right: 0;
  top: 0;

  @media ${({ theme }) => theme.breakpoints.xl} {
    padding-right: 1rem;
  }
`;

export const SocialIcon = styled.a`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease;
  &:hover {
    opacity: 0.65;
  }
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;
