import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  margin: 5rem 0;

  @media ${({ theme }) => theme.breakpoints.xl} {
    margin: 10rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 6rem 0 4rem 0;
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
    justify-content: space-around;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    flex-direction: column;
    margin: 7rem auto;
  }
`;

export const ImageContainer = styled.div`
  width: 590px;
  height: 415px;
  border-radius: 25px;
  background-color: rgb(26, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.xl} {
    width: 480px;
    height: 338px;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 590px;
    height: 415px;
    margin-bottom: 2rem;
  }
`;

export const Img = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  overflow: hidden;
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
`;

export const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: ${({ id }) => (id % 2 === 0 ? "flex-start" : "flex-end")};
  margin: 2.5rem 0;

  @media ${({ theme }) => theme.breakpoints.lg} {
    justify-content: center;
    margin: 2rem 0 4rem 0;
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
  &:hover {
    opacity: 0.65;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    margin: 0 1.5rem;
  }
`;
