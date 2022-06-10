import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  margin: 5rem 0;

  @media ${({ theme }) => theme.breakpoints.xl} {
    margin: 10rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 6rem 0 4rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 4rem 0 0 0;
  }
`;

export const ProjectContainer = styled.div`
  width: 97%;
  display: flex;
  flex-direction: ${({ id }) => (id % 2 === 0 ? "" : "row-reverse")};
  align-items: center;
  justify-content: space-around;
  margin: 10rem auto;

  @media ${({ theme }) => theme.breakpoints.xl} {
    justify-content: space-evenly;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: column;
    margin: 7rem auto;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 4rem auto;
  }
`;

export const ImageContainer = styled.div`
  width: 590px;
  height: 390px;
  padding: 1rem;
  border-radius: 25px;
  background-color: rgb(26, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 480px;
    height: 317px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 590px;
    height: 390px;
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 90vw;
    height: fit-content;
  }
`;

export const Img = styled.img`
  object-fit: contain;
  overflow: hidden;
  border-radius: 15px;
`;

export const InfoContainer = styled.div`
  width: 590px;
  text-align: ${({ id }) => (id % 2 === 0 ? "" : "right")};

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 480px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    text-align: center;
    width: 590px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 95%;
  }
`;

export const Header = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 0;
  font-size: 6.5rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: 2rem;
  letter-spacing: 0.4rem;
  line-height: 1;

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: 6rem;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 6.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 4rem;
    margin-top: 1rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.light};
  line-height: 1.3;
  padding-bottom: 1rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin-top: 0;
    padding-bottom: 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.6rem;
    margin-top: 0.5rem;
    width: 100%;
  }
`;

export const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: ${({ id }) => (id % 2 === 0 ? "flex-start" : "flex-end")};
  margin: 2.5rem 0;

  @media ${({ theme }) => theme.breakpoints.lg} {
    justify-content: space-evenly;
    margin: 2rem 0 4rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    justify-content: space-evenly;
    width: 90%;
    margin: 2rem auto 4rem auto;
  }
`;

export const ExternalLink = styled.a`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.black};
  text-align: center;
  text-transform: uppercase;
  margin: ${({ id }) => (id % 2 === 0 ? "0 3rem 0 0" : "0 0 0 3rem")};
  width: 140px;
  height: 55px;
  line-height: 55px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  transition: 0.3s ease;

  @media screen and (min-width: 769px) {
    &:hover {
      opacity: 0.65;
      cursor: pointer;
    }
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 0 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    transition: 0s;
    &:active {
      opacity: 0.65;
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 0 0.5rem;
    font-size: 1.4rem;
    width: 120px;
    height: 45px;
    line-height: 45px;
    letter-spacing: 0.1rem;
    padding: 0 0.5rem;
  }
`;
