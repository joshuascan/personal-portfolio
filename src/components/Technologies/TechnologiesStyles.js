import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  max-width: 850px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 750px;
    width: 100%;
    justify-content: space-around;
    margin: 1rem 0 0 0;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    margin: 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  max-width: 32rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0;
    margin-top: 3rem;
  }
`;

export const ListTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: 2.5rem;
  text-transform: uppercase;
  line-height: 3.2rem;
  letter-spacing: 0.02rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 1.5rem 0 0.8rem 0;

  @media ${({ theme }) => theme.breakpoints.small} {
    font-size: 2.4rem;
  }
`;

export const ListParagraph = styled.p`
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.lightObl};
  font-style: oblique;
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.secondary};
`;
