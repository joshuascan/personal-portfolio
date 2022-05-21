import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding-top: 10rem;
`;

export const LeftSection = styled.div`
  text-align: right;
  margin-right: 8rem;
  width: 600px;
`;

export const RightSection = styled.div`
  margin: 0 2rem;
`;

export const HeroHeader = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Name = styled.span`
  font-size: 10rem;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  font-weight: lighter;
  color: ${(props) => props.theme.colors.secondary};
  line-height: 1.4;
  font-style: italic;
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 450px;
  position: relative;
`;

export const Img = styled.img`
  position: absolute;
`;

export const Rectangle = styled.div`
  width: 300px;
  height: 450px;
  border: 3px solid rgba(255, 255, 255, 0.75);
  position: relative;
  left: 15px;
  bottom: 15px;
`;
