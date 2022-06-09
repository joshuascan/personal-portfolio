import { StyledBurger } from "./BurgerStyles";

const Burger = ({ toggleNav }) => {
  return (
    <StyledBurger onClick={toggleNav}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
