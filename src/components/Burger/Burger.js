import { StyledBurger } from "./BurgerStyles";

const Burger = ({ toggleNav, open }) => {
  return (
    <StyledBurger onClick={toggleNav} open={open}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
