import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const ListItem = styled.li`
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.black};
  font-size: 2.5rem;
  text-transform: uppercase;
  line-height: 3.2rem;
  letter-spacing: 0.02rem;
  color: ${(props) => props.theme.colors.secondary};
  margin: 1.5rem 0 0.8rem 0;
`;

export const ListParagraph = styled.p`
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.lightObl};
  color: ${(props) => props.theme.colors.secondary};
`;
