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

export const ImageContainer = styled.div`
  width: 300px;
  height: 450px;
  box-shadow: 10px 10px ${(props) => props.theme.colors.primary};
`;
