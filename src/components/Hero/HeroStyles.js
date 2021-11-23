import styled from "styled-components";

export const LeftSection = styled.div`
  text-align: right;
  margin-right: 2rem;
`;

export const RightSection = styled.div``;

export const HeroText = styled.h1`
  font-size: 7rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Name = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const Rectangle = styled.div`
  height: 400px;
  width: 300px;
  background-color: ${(props) => props.theme.colors.primary};
`;
