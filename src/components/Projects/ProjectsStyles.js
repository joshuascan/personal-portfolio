import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem auto;
`;

export const ImageContainer = styled.div`
  width: 550px;
  height: 375px;
  border-radius: 25px;
  background-color: rgb(26, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  width: 50%;
  text-align: ${(props) => (props.right ? "right" : "")};
`;

export const Header = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 0;
  font-size: 8rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  font-weight: lighter;
  line-height: 2.4rem;
  padding-bottom: 1rem;
`;

export const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
  margin: 2.5rem 0;
`;

export const ExternalLink = styled.a`
  font-size: 1.9rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  margin: ${(props) => (props.right ? "0 0 0 3rem" : "0 3rem 0 0")};
  width: 150px;
  height: 54px;
  line-height: 27px;
  padding: 1rem 1rem;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.primary};
  background: black;
  border: 3px solid ${(props) => props.theme.colors.primary};
  transition: 0.3s ease;
  &:hover {
    opacity: 0.65;
    cursor: pointer;
  }
`;
