import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "3.2rem 4.8rem")};
  justify-content: ${(props) => (props.center ? "center" : "")};
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "6.5rem" : "5.6rem")};
`;

export const SectionText = styled.p`
  font-weight: 300;
  font-size: 2.4rem;
`;
