import styled from "styled-components";

export const Section = styled.section`
  display: flex;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65rem" : "5.6rem")};
`;

export const SectionText = styled.p`
  font-weight: 300;
  font-size: 2.4rem;
`;
