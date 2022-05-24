import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5rem auto;
`;

export const ImageContainer = styled.div`
  width: 590px;
  height: 415px;
  border-radius: 25px;
  background-color: rgb(26, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  width: 590px;
  text-align: ${(props) => (props.right ? "right" : "")};
`;

export const Header = styled.h2`
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 0;
  font-size: 8rem;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.black};
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.light};
  line-height: 1.3;
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
  font-family: ${(props) => props.theme.fonts.black};
  text-align: center;
  text-transform: uppercase;
  margin: ${(props) => (props.right ? "0 0 0 3rem" : "0 3rem 0 0")};
  width: 150px;
  height: 58px;
  line-height: 58px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.background};
  border: 3px solid ${(props) => props.theme.colors.primary};
  transition: 0.3s ease;
  &:hover {
    opacity: 0.65;
    cursor: pointer;
  }
`;
