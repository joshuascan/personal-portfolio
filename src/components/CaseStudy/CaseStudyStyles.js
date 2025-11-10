import styled from "styled-components";
import Image from "next/image";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding-top: 10rem;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-top: 4rem;
  }
`;

export const HeroImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

export const HeroImg = styled(Image)`
  object-fit: contain;
  object-position: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const SectionBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Heading = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: none;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Body = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.fonts.light};
`;

export const List = styled.ul`
  padding-left: 1.6rem;
  margin: 0.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ListItem = styled.li`
  font-size: 1.8rem;
  line-height: 1.6;
  list-style: disc;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.secondary};
`;
