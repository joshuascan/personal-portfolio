import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding-top: 10rem;
  height: 875px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5rem;
`;

export const LeftSection = styled.div`
  text-align: right;
  width: 600px;
`;

export const RightSection = styled.div`
  margin-right: 15rem;
  margin-left: 14rem;
`;

export const HeroHeader = styled.h1`
  font-size: 3.1rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.secondary};
  line-height: 1;
`;

export const FirstLine = styled.div`
  margin-bottom: 2rem;
`;

export const Bolder = styled.span`
  font-family: ${(props) => props.theme.fonts.black};
`;

export const Name = styled.span`
  font-size: 10rem;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.6rem;
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.lightObl};
  color: ${(props) => props.theme.colors.secondary};
  line-height: 1.5;
  margin-top: 3rem;
`;

export const ImageContainer = styled.div`
  width: 450px;
  height: 675px;
`;

export const Img = styled.img`
  position: absolute;
`;

export const Rectangle = styled.div`
  width: 450px;
  height: 675px;
  border: 3px solid rgba(255, 255, 255, 0.75);
  position: relative;
  left: 15px;
  bottom: 15px;
`;
