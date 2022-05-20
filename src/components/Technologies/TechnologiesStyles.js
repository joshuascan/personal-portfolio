import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1);
  gap: 20px;
  margin: 3rem 0;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h3`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 3.2rem;
  letter-spacing: 0.02rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 8px;
`;
