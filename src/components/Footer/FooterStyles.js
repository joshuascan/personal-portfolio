import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
`;

export const FooterContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
`;

export const LinkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0.9;
  margin-bottom: 16px;
`;

export const LinkItem = styled.a`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0.5;
  margin-bottom: 1.6rem;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    opacity: 0.65;
    left: 6px;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
