import styled from "styled-components";
import Image from "next/image";

export const CaseStudiesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  margin: 5rem 0;

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 15px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
`;

export const ImgContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
`;

export const Img = styled(Image)`
  object-fit: cover;
  object-position: top center;
`;

export const CardContent = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Excerpt = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  font-family: ${({ theme }) => theme.fonts.light};
`;
