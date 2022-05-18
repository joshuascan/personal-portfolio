import styled from "styled-components";

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
`;

export const Card = styled.div`
  text-align: center;
  width: 400px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const Header = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.p`
  width: 100%;
  padding: 0 50px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  line-height: 2.4rem;
  text-align: justify;
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
`;

export const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLink = styled.a`
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  color: white;
  background: ${(props) => props.theme.colors.primary};
  transition: 0.5s ease;
  &:hover {
    opacity: 0.65;
    cursor: pointer;
  }
`;
