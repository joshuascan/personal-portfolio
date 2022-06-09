import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "3.2rem 4.8rem")};
  justify-content: ${(props) => (props.center ? "center" : "")};
  align-items: ${(props) => (props.align ? "center" : "")};
  margin: 0 auto;
  max-width: 1340px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: ${(props) => (props.nopadding ? "0" : "2rem 3.5rem")};
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "6.5rem" : "5.6rem")};
  margin-bottom: 2.5rem;
  text-transform: uppercase;
`;

export const SectionText = styled.p`
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.4;
  padding-bottom: 2.4rem;
`;
