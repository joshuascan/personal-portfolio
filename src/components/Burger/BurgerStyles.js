import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  /* top: 5%;
  left: 2rem; */
  top: 1rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 3.25rem;
    height: 0.35rem;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.4s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
