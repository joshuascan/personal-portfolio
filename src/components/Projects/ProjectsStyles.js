import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  margin: 5rem 0;
`;

export const ProjectContainer = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10rem auto;
  /* padding: 1rem; */
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
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 0;
  font-size: 6.5rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: 2rem;
  letter-spacing: 0.4rem;
  line-height: 1;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.light};
  line-height: 1.3;
  padding-bottom: 1rem;
  margin-top: 1rem;
`;

export const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: ${(props) => (props.right ? "flex-end" : "flex-start")};
  margin: 2.5rem 0;
`;

export const ExternalLink = styled.a`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.black};
  text-align: center;
  text-transform: uppercase;
  margin: ${(props) => (props.right ? "0 0 0 3rem" : "0 3rem 0 0")};
  width: 140px;
  height: 55px;
  line-height: 55px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  transition: 0.3s ease;
  &:hover {
    opacity: 0.65;
    cursor: pointer;
  }
`;
