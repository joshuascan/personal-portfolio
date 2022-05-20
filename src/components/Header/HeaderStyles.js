import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin: 1.6rem 0; */
`;

export const Div1 = styled.div`
  display: flex;
`;

export const Div2 = styled.div`
  display: flex;
`;

export const NavLink = styled.a`
  font-size: 2rem;
  padding: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.5s ease;
  &:hover {
    opacity: 0.65;
    cursor: pointer;
  }
`;

export const SocialIcons = styled.a`
  margin: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.5s ease;
  &:hover {
    opacity: 0.65;
    transform: scale(1.3);
  }
`;
