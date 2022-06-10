import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 95%;
  }
`;

export const FooterContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  max-width: 1040px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.lightObl}, sans-serif;
  font-style: oblique;
  font-weight: lighter;
  font-size: 1.8rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.5;
  margin: 1.6rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const NewLine = styled.span`
  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
    margin-top: 0.5rem;
  }
`;
