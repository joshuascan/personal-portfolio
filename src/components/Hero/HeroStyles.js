import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 5rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-top: 4rem;
    padding-bottom: 0;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: column-reverse;
  }
`;

export const LeftSection = styled.div`
  text-align: right;
  margin-left: 3rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 75%;
    margin-left: 0;
    margin-top: 3rem;
    text-align: center;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 90%;
  }
`;

export const RightSection = styled.div`
  margin-right: 15rem;
  margin-left: 12rem;

  @media ${({ theme }) => theme.breakpoints.xl} {
    margin: 0;
  }
`;

export const HeroHeader = styled.h1`
  font-size: 3.1rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
`;

export const FirstLine = styled.div`
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 1rem;
  }
`;

export const Bolder = styled.span`
  font-family: ${({ theme }) => theme.fonts.black};
`;

export const Name = styled.span`
  font-size: 10rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.6rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 5.5rem;
    letter-spacing: 0.3rem;
  }
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
  position: relative;
  line-height: 0;

  ::before {
    content: "";
    height: 100%;
    width: 100%;
    border: 3px solid rgba(255, 255, 255, 0.75);
    position: absolute;
    z-index: 1;
    top: -15px;
    right: -15px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 75vw;
  }
`;

export const Img = styled.img`
  position: relative;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;
