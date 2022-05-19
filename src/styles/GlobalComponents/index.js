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
  margin-bottom: 2.5rem;
`;

export const SectionText = styled.p`
  font-weight: 300;
  font-size: 2.4rem;
`;

export const SectionDivider = styled.div`
  width: 300px;
  height: 10px;
  border-radius: 10px;
  margin: 2rem 2rem;
  background: linear-gradient(
    340deg,
    ${(props) => props.theme.colors.primary} 50%,
    ${(props) => props.theme.colors.secondary} 100%
  );
`;
