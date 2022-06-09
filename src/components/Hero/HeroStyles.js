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
  max-width: 600px;
  margin-left: 3rem;
`;

export const RightSection = styled.div`
  margin-right: 15rem;
  margin-left: 12rem;
`;

export const HeroHeader = styled.h1`
  font-size: 3.1rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
`;

export const FirstLine = styled.div`
  margin-bottom: 2rem;
`;

export const Bolder = styled.span`
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Name = styled.span`
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.6rem;
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.lightObl}, sans-serif;
  font-style: oblique;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.secondary};
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
